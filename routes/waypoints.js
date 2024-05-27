import express from "express";

import {
  createWaypoint,
  getWaypoints,
  getWaypoint,
  updateWaypoint,
  deleteWaypoint,
} from "../controllers/waypoints.js";

const router = express.Router();

router.post("/", createWaypoint);
router.get("/", getWaypoints);
router.get("/:id", getWaypoint);
router.put("/:id", updateWaypoint);
router.delete("/:id", deleteWaypoint);

export default router;