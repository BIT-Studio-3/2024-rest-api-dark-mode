import express from "express";

import {
  createShip,
  getShips,
} from "../controllers/ship.js";

const router = express.Router();

router.post("/", createShip);
router.get("/", getShips);

export default router;