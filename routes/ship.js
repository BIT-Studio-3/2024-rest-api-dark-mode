import express from "express";

import {
  createShip,
  getShips,
  getShip,
  updateShip,
  deleteShip
} from "../controllers/ship.js";

import { 
  validatePostShip 
} from "../middleware/shipValidation.js";

const router = express.Router();

router.post("/", validatePostShip, createShip);
router.get("/", getShips);
router.get("/:id", getShip);
router.put("/:id", updateShip);
router.delete("/:id", deleteShip);

export default router;