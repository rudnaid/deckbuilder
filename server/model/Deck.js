import mongoose from "mongoose";
const { Schema, model } = mongoose;

const deckSchema = new Schema({
  name: { type: String, reqiured: true },
  cards: Array,
});

export default model("Deck", deckSchema);
