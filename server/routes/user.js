import { Router } from "express";
import { getUser } from "../controllers/_user.js";

//Instance
const router = Router();

router.get("/", getUser);

export default router;