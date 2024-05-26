import express from "express";

import {
  createWaypoint,
  getWaypoints,
  getWaypoint,
  updateWaypoint,
} from "../controllers/waypoints.js";

const router = express.Router();

router.post("/", createWaypoint);
router.get("/", getWaypoints);
router.get("/:id", getWaypoint);
router.put("/:id", updateWaypoint);

export default router;