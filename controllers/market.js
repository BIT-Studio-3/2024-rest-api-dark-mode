import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const createMarket = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.market.create({
        data: { ...req.body },

      });
  
      const newMarket = await prisma.market.findMany();
  
      return res.status(201).json({
        msg: "Marketplace waypoint successfully created",
        data: newMarket,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export{
    createMarket
  }