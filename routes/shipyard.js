import express from "express";

import {
  createShipyard,
  getShipyards,
} from "../controllers/shipyard.js";

const router = express.Router();

router.post("/", createShipyard);
router.get("/", getShipyards);

export default router;