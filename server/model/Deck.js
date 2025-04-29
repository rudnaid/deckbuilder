import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const deckSchema = new Schema({
  name: { type: String, required: true },
  cards: [
    {
      cardId: {
        type: Schema.Types.ObjectId,
        ref: 'Card',
      },
      count: Number,
    },
  ],
});

export default model('DeckBuilder', deckSchema);
