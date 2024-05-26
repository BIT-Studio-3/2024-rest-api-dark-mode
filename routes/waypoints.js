import express from "express";

import {
  createWaypoint,
} from "../controllers/waypoints.js";

const router = express.Router();

router.post("/", createWaypoint);

export default router;