import { Router } from "express";
import { getAllUser, getUser, updatePic, userLogout } from "../controllers/_user.js";
import auth from "../middleware/auth.js";

//Instance
const router = Router();

router.get("/",auth, getUser);
router.get("/all", getAllUser);
router.post("/logout",userLogout)
router.patch("/pic", updatePic);


export default router;