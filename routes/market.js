import express from "express";

import {
  createMarket,
  getMarkets,
} from "../controllers/market.js";

const router = express.Router();

router.post("/", createMarket);
router.get("/", getMarkets);

export default router;