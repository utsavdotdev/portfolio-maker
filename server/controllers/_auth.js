import User from "../models/user.schema.js";
import generateToken from "../utils/generateToken.js";

export const auth = async (req, res) => {
  try {
    const { username, email, profilePic } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const { accessToken, refreshToken } = await generateToken(user._id);
      return res
        .status(200)
        .json({
          error: false,
          accessToken,
          refreshToken,
          msg: "Login Successfully",
        });
    }
    const newUser = await new User({
      username,
      email,
      profilePic,
    }).save();
    const { accessToken, refreshToken } = await generateToken(newUser._id);
    res.status(200).json({error:false,accessToken,refreshToken,msg:"Signup Successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};
