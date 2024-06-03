import express from "express";

import {
  createMarketItem,
  getMarketItems,
  getMarketItem
} from "../controllers/marketitem.js";

const router = express.Router();

router.post("/", createMarketItem);
router.get("/", getMarketItems);
router.get("/:id", getMarketItem);

export default router;