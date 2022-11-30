import { Router } from "express";
import {
  createPortfolio,
  deletePortfolio,
  getPortfolio,
  getPortfolios,
  updateCustomizationPortfolio,
  updateLinksPortfolio,
  updateNamePortfolio,
  updateNewsletter,
  updateStatus,
} from "../controllers/_portfolio.js";

//Instance
const router = Router();

router.get("/:username", getPortfolio);
router.get("/", getPortfolios);
router.patch("/username", updateNamePortfolio);
router.patch("/links", updateLinksPortfolio);
router.patch("/customization", updateCustomizationPortfolio);
router.patch("/newsletter", updateNewsletter);
router.patch("/status", updateStatus);
router.delete("/:username", deletePortfolio);
router.post("/", createPortfolio);


export default router;