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

  export{
    createShip
  }