import { Router } from "express";
import { getAllUser, getUser } from "../controllers/_user.js";
import auth from "../middleware/auth.js";

//Instance
const router = Router();

router.get("/",auth, getUser);
router.get("/all", getAllUser);

export default router;