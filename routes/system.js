import express from "express";

import {
  createSystem,
  getSystems,
  getSystem,
  updateSystem,
} from "../controllers/system.js";

const router = express.Router();

router.post("/", createSystem);
router.get("/", getSystems);
router.get("/:id", getSystem);
router.put("/:id", updateSystem);

export default router;