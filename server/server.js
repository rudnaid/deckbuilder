import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import cardsRouter from './routes/cards.js';
import userRouter from './routes/user.js';
import metaRouter from './routes/meta.js';
import deckRouter from './routes/decks.js';

const port = process.env.SERVER_PORT;
const app = express();

const connectWithRetry = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (err) {
    console.error('MongoDB connection unsuccessful, retrying after 5 seconds.', err.message);
    setTimeout(connectWithRetry, 5000);
  }
};

connectWithRetry();

app.use(cors());
app.use(express.json());
app.use('/api/cards', cardsRouter);
app.use('/api/user', userRouter);
app.use('/api/meta', metaRouter);
app.use('/api/deck', deckRouter);
app.listen(port);
