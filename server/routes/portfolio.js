import { Router } from "express";
import {
  createPortfolio,
  deletePortfolio,
  getPortfolio,
  getPortfolios,
  updatePortfolio,
} from "../controllers/_portfolio.js";

//Instance
const router = Router();

router.get("/:username", getPortfolio);
router.get("/", getPortfolios);
router.patch("/:username", updatePortfolio);
router.delete("/:username", deletePortfolio);
router.post("/", createPortfolio);


export default router;