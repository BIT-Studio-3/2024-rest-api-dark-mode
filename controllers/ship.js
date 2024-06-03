import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createShip = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.ship.create({
        data: { ...req.body },

      });
  
      const newShip = await prisma.ship.findMany();
  
      return res.status(201).json({
        msg: "Ship successfully created",
        data: newShip,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getShips = async (req, res) => {
    try {
      const ships = await prisma.ship.findMany();
  
      if (ships.length === 0) {
        return res.status(404).json({ msg: "No ships found" });
      }
  
      return res.json({ data: ships });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export{
    createShip,
    getShips
  }