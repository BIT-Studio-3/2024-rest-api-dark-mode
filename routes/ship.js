import express from "express";

import {
  createShip,
  getShips,
  getShip
} from "../controllers/ship.js";

const router = express.Router();

router.post("/", createShip);
router.get("/", getShips);
router.get("/:id", getShip);

export default router;