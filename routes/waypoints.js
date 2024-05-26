import express from "express";

import {
  createWaypoint,
  getWaypoints,
} from "../controllers/waypoints.js";

const router = express.Router();

router.post("/", createWaypoint);
router.get("/", getWaypoints);

export default router;