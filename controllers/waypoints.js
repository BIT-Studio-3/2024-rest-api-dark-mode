import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createWaypoint = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.waypoint.create({
        data: { ...req.body },

      });
  
      const newWaypoint = await prisma.waypoint.findMany();
  
      return res.status(201).json({
        msg: "Waypoint successfully created",
        data: newWaypoint,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getWaypoints = async (req, res) => {
    try {
      const waypoints = await prisma.waypoint.findMany();
  
      if (waypoints.length === 0) {
        return res.status(404).json({ msg: "No waypoints found" });
      }
  
      return res.json({ data: waypoints });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getWaypoint = async (req, res) => {
    try {
      const waypoint = await prisma.waypoint.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!waypoint) {
        return res
          .status(404)
          .json({ msg: `No waypoints with the id: ${req.params.id} found` });
      }
  
      return res.json({
        data: waypoint,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const updateWaypoint = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      let waypoint = await prisma.waypoint.findUnique({
        where: { id: Number(req.params.id) },
      });
  
      if (!waypoint) {
        return res
          .status(404)
          .json({ msg: `No waypoint with the id: ${req.params.id} found` });
      }
  
      waypoint = await prisma.waypoint.update({
        where: { id: Number(req.params.id) },
        data: { ...req.body },
      });
  
      return res.json({
        msg: `Waypoint with the id: ${req.params.id} successfully updated`,
        data: waypoint,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export{
    createWaypoint,
    getWaypoints,
    getWaypoint,
    updateWaypoint
  }