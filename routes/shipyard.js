import express from "express";

import {
  createShipyard,
  getShipyards,
  getShipyard,
  updateShipyard,
  deleteShipyard,
} from "../controllers/shipyard.js";

import { 
  validatePostShipyard 
} from "../middleware/shipyardValidation.js";

const router = express.Router();

router.post("/", validatePostShipyard, createShipyard);
router.get("/", getShipyards);
router.get("/:id", getShipyard);
router.put("/:id", updateShipyard);
router.delete("/:id", deleteShipyard);

export default router;