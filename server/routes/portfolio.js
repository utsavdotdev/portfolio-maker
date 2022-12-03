import { Router } from "express";
import {
  createPortfolio,
  deleteAllPortfolio,
  deletePortfolio,
  getPortfolio,
  getPortfolios,
  updateCustomizationPortfolio,
  updateLinksPortfolio,
  updateNamePortfolio,
  updateOther,
} from "../controllers/_portfolio.js";

//Instance
const router = Router();

router.get("/:username", getPortfolio);
router.get("/", getPortfolios);
router.patch("/username", updateNamePortfolio);
router.patch("/links", updateLinksPortfolio);
router.patch("/customization", updateCustomizationPortfolio);
router.patch("/other", updateOther);
router.delete("/all", deleteAllPortfolio);
router.post("/", createPortfolio);
// router.delete("/:username", deletePortfolio);


export default router;