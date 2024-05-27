import express from "express";

import {
  createShipyard,
} from "../controllers/shipyard.js";

const router = express.Router();

router.post("/", createShipyard);

export default router;