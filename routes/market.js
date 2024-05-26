import express from "express";

import {
  createMarket,
  getMarkets,
  getMarket,
} from "../controllers/market.js";

const router = express.Router();

router.post("/", createMarket);
router.get("/", getMarkets);
router.get("/:id", getMarket);

export default router;