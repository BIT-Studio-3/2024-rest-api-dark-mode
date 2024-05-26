import express from "express";

import {
  createMarket,
  getMarkets,
  getMarket,
  updateMarket,
} from "../controllers/market.js";

const router = express.Router();

router.post("/", createMarket);
router.get("/", getMarkets);
router.get("/:id", getMarket);
router.put("/:id", updateMarket);

export default router;