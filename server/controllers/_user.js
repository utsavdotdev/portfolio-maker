import User from "../models/user.schema.js";

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
}
export const getAllUser = async (req, res) => {
    try {
        //get all user
        const allUser = await User.find();
        res.status(200).json({error:false,allUser,msg:"All user"});
    } catch (error) {
        res.status(500).json({error:true,msg:"Internal server error"});
    }
}
