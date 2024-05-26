import express from "express";

import {
  createMarket,
  getMarkets,
  getMarket,
  updateMarket,
  deleteMarket,
} from "../controllers/market.js";

const router = express.Router();

router.post("/", createMarket);
router.get("/", getMarkets);
router.get("/:id", getMarket);
router.put("/:id", updateMarket);
router.delete("/:id", deleteMarket);

export default router;