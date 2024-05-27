import express from "express";

import {
  createShipyard,
  getShipyards,
  getShipyard,
  updateShipyard,
} from "../controllers/shipyard.js";

const router = express.Router();

router.post("/", createShipyard);
router.get("/", getShipyards);
router.get("/:id", getShipyard);
router.put("/:id", updateShipyard);

export default router;