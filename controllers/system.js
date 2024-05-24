import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createSystem = async (req, res) => {
    try {
      const contentType = req.headers["content-type"];
      if (!contentType || contentType !== "application/json") {
        return res.status(400).json({
          msg: "Invalid Content-Type. Expected application/json.",
        });
      }
  
      await prisma.system.create({
        data: { ...req.body },
      });
  
      const newSystems = await prisma.system.findMany();
  
      return res.status(201).json({
        msg: "System successfully created",
        data: newSystems,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  export{
    createSystem
  }