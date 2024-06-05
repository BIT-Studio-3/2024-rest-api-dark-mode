import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const register = async (req, res) => {
  try {
    const contentType = req.headers["content-type"];
    if (!contentType || contentType !== "application/json") {
      return res.status(400).json({
        msg: "Invalid Content-Type. Expected application/json",
      });
    }

    const { name, password, accountId, credits, shipCount, startingFaction } = req.body;

    let agent = await prisma.agentData.findUnique({ where: { name } });

    if (agent) return res.status(409).json({ msg: "Agent already exists" });

    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(password, salt);

    agent = await prisma.agentData.create({
      data: { name, password: hashedPassword, accountId, credits, shipCount, startingFaction },
    });

    delete agent.password;

    return res.status(201).json({
      msg: "Agent successfully registered",
      data: agent,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const contentType = req.headers["content-type"];
    if (!contentType || contentType !== "application/json") {
      return res.status(400).json({
        msg: "Invalid Content-Type. Expected application/json",
      });
    }

    const { name, password } = req.body;

    const agent = await prisma.agentData.findUnique({ where: { name } });

    if (!agent) return res.status(401).json({ msg: "Invalid name" });

    const isPasswordCorrect = await bcryptjs.compare(password, agent.password);

    if (!isPasswordCorrect)
      return res.status(401).json({ msg: "Invalid password" });

    const { JWT_SECRET, JWT_LIFETIME } = process.env;

    const token = jwt.sign(
      {
        id: agent.id,
        name: agent.name,
      },
      JWT_SECRET,
      { expiresIn: JWT_LIFETIME }
    );

    return res.status(200).json({
      msg: "Agent successfully logged in",
      token: token,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

export { register, login };