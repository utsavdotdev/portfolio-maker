import Portfolio from "../models/portfolio.schema.js";
import User from "../models/user.schema.js";
import UserToken from "../models/userToken.schema.js";
import verifyRefreshToken from "../utils/verifyRefreshToken.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password-__v");
    if (!user) {
      return res.status(404).json({ error: true, msg: "User not found!" });
    }
    res.status(200).json({ error: false, user, msg: "User data extracted" });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};
export const getAllUser = async (req, res) => {
  try {
    //get all user
    const allUser = await User.find();
    res.status(200).json({ error: false, allUser, msg: "All user" });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};

export const userLogout = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const { error, tokenDetails, msg } = verifyRefreshToken(refreshToken);
    if (error) {
      return res.status(401).json({ error, msg });
    }
    const { _id } = tokenDetails;
    const deletedToken = await UserToken.findOne({ userId: _id });
    if (!deletedToken) {
      return res.status(404).json({ error: true, msg: "Token not found" });
    }
    await deletedToken.delete();
    res.status(200).json({ error: false, msg: "Token deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};

export const updatePic = async (req, res) => {
  try {
    const { _id, profilePic } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: _id },
      { $set: { profilePic: profilePic } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: true, msg: "User not found" });
    }
    //update the profile pic in portfolio
    await Portfolio.findOneAndUpdate(
      { user_id: _id },
      { $set: { user_img: profilePic } },
      { new: true }
    );
    res.status(200).json({ error: false, user, msg: "User data updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};
