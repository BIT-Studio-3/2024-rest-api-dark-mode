import express from "express";

import {
  createMarket,
} from "../controllers/system.js";

const router = express.Router();

router.post("/", createMarket);

export default router;