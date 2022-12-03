import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  user_img: {
    type: String,
  },
  username: {
    type: String,
  },
  url: {
    type: String,
  },
  links: [
    {
      platform: String,
      url: String,
    },
  ],
  customizations: {
    transition: {
      type: String,
      default: "fadein",
    },
    border_radius: {
      type: String,
      default: "4",
    },
    bg_color: {
      type: String,
      default: "#1e1f1f",
    },
    bg_img: {
      type: String,
      default: "/bg/bg6.jpg",
    },
  },
  status: {
    type: Boolean,
    default: true,
  },
  newsletter: {
    type: Boolean,
    default: false,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;
