import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createShipyard = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.shipyard.create({
        data: { ...req.body },

      });
  
      const newShipyard = await prisma.shipyard.findMany();
  
      return res.status(201).json({
        msg: "Shipyard successfully created",
        data: newShipyard,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export{
    createShipyard
  }