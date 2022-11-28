import {Router} from "express";
import { getNewToken, getAllTokens } from "../controllers/_token.js";

//Instance
const router = Router();

router.post("/refresh",getNewToken);
router.get("/all",getAllTokens);

export default router;