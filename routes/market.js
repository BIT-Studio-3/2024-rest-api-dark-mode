import express from "express";

import {
  createMarket,
  getMarkets,
  getMarket,
  updateMarket,
  deleteMarket,
} from "../controllers/market.js";

import { 
  validatePostMarket
} from "../middleware/marketValidation.js";

const router = express.Router();

router.post("/", validatePostMarket, createMarket);
router.get("/", getMarkets);
router.get("/:id", getMarket);
router.put("/:id", updateMarket);
router.delete("/:id", deleteMarket);

export default router;