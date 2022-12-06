import Bot from "../models/bot.schema.js";
import Portfolio from "../models/portfolio.schema.js";
import User from "../models/user.schema.js";
export const getAllPortfolios = async () => {
  try {
    const allPort = await Portfolio.find({ newsletter: true });
    return allPort;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (user_id) => {
  try {
    const user = await User.findOne({
      _id: user_id,
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const checkPortfolio = async (user_id) => {
  try {
    const portfolio = await Bot.findOne({ user_id });
    return portfolio;
  } catch (error) {
    console.error(error);
  }
};

export const updateViews = async (user_id, views) => {
  try {
    await Portfolio.findOneAndUpdate(
      { user_id },
      { $set: { preViews: views } },
      { new: true }
    );
    return true;
  } catch (error) {
    console.error(error);
  }
};

export const createPort = async (user_id, views) => {
  try {
    const newPort = new Bot({
      user_id,
      preViews: views,
    });
    await newPort.save();
    return true;
  } catch (error) {
    console.error(error);
  }
};
