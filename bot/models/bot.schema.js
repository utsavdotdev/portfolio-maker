import mongoose from "mongoose";

const botSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  preViews: {
    type: Number,
    required: true,
    default: 0,
  }
});

const Bot = mongoose.model("Bot", botSchema);
export default Bot;
