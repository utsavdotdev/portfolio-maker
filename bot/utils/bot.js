import {
  checkPortfolio,
  createPort,
  getAllPortfolios,
  getUser,
  updateViews,
} from "./function.js";
import msg from "./msg.js";
import sendEmail from "./sendEmail.js";

const bot = async () => {
  console.log("Bot is Initializing...");
  const portfolios = await getAllPortfolios();
  portfolios.map(async (portfolio) => {
    const { user_id, views, username } = portfolio;
    const prevPort = await checkPortfolio(user_id);
    const user = await getUser(user_id);
    const { email } = user;

    const html = msg(username, views);

    console.log(`Bot is running for ${username} `);
    if (prevPort === null) {
      if (views > 100) {
        // send mail
        await createPort(user_id, views);
        sendEmail(email, "Wow! You got the boost", html);
      }
      return;
    }
    if (views > prevPort?.preViews + 100) {
      // send mail
      await updateViews(user_id, views);
      sendEmail(email, "Wow! You got the boost", html);
      return;
    }
    console.log(`${username} does not have enough views`);
  });
};

export default bot;
