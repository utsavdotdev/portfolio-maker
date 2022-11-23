import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  links: [
    {
      type: String,
      platform: String,
      url: String,
      label: String,
    },
  ],
  customizations: {
    transition: {
      type: String,
      required: true,
      default: "fadein",
    },
    border_radius: {
      type: String,
      required: true,
      default: "4",
    },
    bg_color: {
      type: String,
      required: true,
      default: "#1e1f1f",
    },
    bg_img: {
      type: String,
      required: true,
      default: "/bg/bg6.jpg",
    },
  },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;
