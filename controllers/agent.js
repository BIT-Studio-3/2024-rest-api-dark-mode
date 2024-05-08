import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createAgentData = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.agentData.create({
        data: { ...req.body },
      });
  
      const newagentData = await prisma.agentData.findMany();
  
      return res.status(201).json({
        msg: "Agent successfully created",
        data: newagentData,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getAgentDatas = async (req, res) => {
    try {
      const agentData = await prisma.agentData.findMany();
  
      if (agentData.length === 0) {
        return res.status(404).json({ msg: "No agent found" });
      }
  
      return res.json({ data: agentData });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getAgentData = async (req, res) => {
    try {
      const agentData = await prisma.agentData.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!agentData) {
        return res
          .status(404)
          .json({ msg: `No agent data with the id: ${req.params.id} found` });
      }
  
      return res.json({
        data: agentData,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const updateAgentData = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      let agentData = await prisma.agentData.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!agentData) {
        return res
          .status(404)
          .json({ msg: `No agent data with the id: ${req.params.id} found` });
      }
  
      agentData = await prisma.agentData.update({
        where: { id: Number(req.params.id) },
        data: { ...req.body },
      });
  
      return res.json({
        msg: `Agent with the id: ${req.params.id} successfully updated`,
        data: agentData,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const deleteAgentData = async (req, res) => {
    try {
      const agentData = await prisma.agentData.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!agentData) {
        return res
          .status(404)
          .json({ msg: `No agent with the id: ${req.params.id} found` });
      }
  
      await prisma.agentData.delete({
        where: { id: Number(req.params.id) },
      });
  
      return res.json({
        msg: `Agent with the id: ${req.params.id} successfully deleted`,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export {
    createAgentData,
    getAgentDatas,
    getAgentData,
    updateAgentData,
    deleteAgentData,
  };