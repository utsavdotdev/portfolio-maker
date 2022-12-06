import {} from "dotenv/config";
import bot from "./utils/bot.js";
import colors from "colors";
import {connectDB} from "./utils/db.js"

//connection to database
connectDB();

//running bot
setInterval(bot,20000)