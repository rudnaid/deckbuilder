import { Router } from "express";
import Card from "../model/Card.js";

const filterRouter = Router();

filterRouter.get(
  "/api/filter/:classId/:type/:rarity/:manaCost",
  async (req, res) => {
    const { classId, type, rarity, manaCost } = req.params;
  }
);