import express from "express";

import {
  createMarketItem,
  getMarketItems,
  getMarketItem,
  updateMarketItem,
  deleteMarketItem,
} from "../controllers/marketitem.js";

import { 
  validatePostMarketItem 
} from "../middleware/marketitemValidation.js";

const router = express.Router();

router.post("/", validatePostMarketItem, createMarketItem);
router.get("/", getMarketItems);
router.get("/:id", getMarketItem);
router.put("/:id", updateMarketItem);
router.delete("/:id", deleteMarketItem);

export default router;