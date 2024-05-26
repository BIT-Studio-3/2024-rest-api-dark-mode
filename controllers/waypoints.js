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
        return res.status(404).json({ msg: "No systems found" });
      }
  
      return res.json({ data: waypoints });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export{
    createWaypoint,
    getWaypoints
  }