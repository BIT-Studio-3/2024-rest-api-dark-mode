import express from "express";

import {
  createShip,
} from "../controllers/ship.js";

const router = express.Router();

router.post("/", createShip);

export default router;