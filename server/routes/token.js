import {Router} from "express";
import { getNewToken } from "../controllers/_token.js";

//Instance
const router = Router();

router.post("/refresh",getNewToken);

export default router;