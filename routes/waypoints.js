import express from "express";

import {
  createWaypoint,
  getWaypoints,
  getWaypoint
} from "../controllers/waypoints.js";

const router = express.Router();

router.post("/", createWaypoint);
router.get("/", getWaypoints);
router.get("/:id", getWaypoint);

export default router;