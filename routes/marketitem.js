import express from "express";

import {
  createMarketItem,
} from "../controllers/marketitem.js";

const router = express.Router();

router.post("/", createMarketItem);

export default router;