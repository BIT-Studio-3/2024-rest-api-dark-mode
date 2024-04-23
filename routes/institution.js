import express from "express";

import {
  createAgentData,
  getAgentDatas,
  getAgentData,
  updateAgentData,
  deleteAgentData,
} from "../controllers/institution.js";

const router = express.Router();

router.post("/", createAgentData);
router.get("/", getAgentDatas);
router.get("/:id", getAgentData);
router.put("/:id", updateAgentData);
router.delete("/:id", deleteAgentData);

export default router;