import express from "express";

import {
  createSystem,
  getSystems,
  getSystem,
  updateSystem,
  deleteSystem,
} from "../controllers/system.js";

const router = express.Router();

router.post("/", createSystem);
router.get("/", getSystems);
router.get("/:id", getSystem);
router.put("/:id", updateSystem);
router.delete("/:id", deleteSystem);

export default router;