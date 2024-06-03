import express from "express";

import {
  createShip,
  getShips,
  getShip,
  updateShip,
} from "../controllers/ship.js";

const router = express.Router();

router.post("/", createShip);
router.get("/", getShips);
router.get("/:id", getShip);
router.put("/:id", updateShip);

export default router;