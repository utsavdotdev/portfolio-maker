import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  url:{
    type: String,
    required: true,
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
    type: String,
    default:"Active"
  },
  newsletter: {
    type: Boolean,
    default:false
  },
  views:{
    type:Number,
    default:0
  }
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;
