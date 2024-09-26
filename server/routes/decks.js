import { Router } from "express";
import Deck from "../model/Deck.js";
import User from "../model/User.js";

const deckRouter = Router();

deckRouter.get("/", async (req, res, next) => {
  try {
    const decks = await Deck.find();
    res.status(200).json(decks);
  } catch (error) {
    next(error);
  }
});

deckRouter.post("/", async (req, res, next) => {
  const deck = req.body;

  try {
    const saved = await Deck.create(deck);
    // const user = await User.findById(userId);

    // if (!user) {
    //   res.status(500).json({ error: "User not found" });
    // }
    // await User.findByIdAndUpdate(
    //   userId,
    //   { $set: { decks: [...user.decks, saved._id] } },
    //   { new: true }
    // );
    return res.json(saved);
  } catch (error) {
    next(error);
  }
});

deckRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deck = await Deck.findById(id);
    res.status(200).json(deck);
  } catch (error) {
    next(error);
  }
});

deckRouter.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const updated = await Deck.findOneAndUpdate(
      { _id: id },
      { $set: { ...req.body.deck } },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
});

deckRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deck = Deck.findById(id);
    const deleted = deck.delete();
    return res.json(deleted);
  } catch (error) {
    next(error);
  }
});

export default deckRouter;
