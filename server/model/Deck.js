import mongoose from "mongoose";
const { Schema, model } = mongoose;

const deckSchema = new Schema({
  name: { type: String, reqiured: true },
  cards: [
    {
      cardId: Schema.Types.ObjectId,
      count: Number,
    },
  ],
});

export default model("Deck", deckSchema);
