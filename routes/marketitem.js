import express from "express";

import {
  createMarketItem,
  getMarketItems
} from "../controllers/marketitem.js";

const router = express.Router();

router.post("/", createMarketItem);
router.get("/", getMarketItems);

export default router;