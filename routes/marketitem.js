import express from "express";

import {
  createMarketItem,
  getMarketItems,
  getMarketItem,
  updateMarketItem,
  deleteMarketItem,
} from "../controllers/marketitem.js";

const router = express.Router();

router.post("/", createMarketItem);
router.get("/", getMarketItems);
router.get("/:id", getMarketItem);
router.put("/:id", updateMarketItem);
router.delete("/:id", deleteMarketItem);

export default router;