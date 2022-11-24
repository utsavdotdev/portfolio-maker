import { Router } from "express";
import { auth } from "../controllers/_auth.js";

//Instance
const router = Router();

router.post("/",auth);

export default router;
