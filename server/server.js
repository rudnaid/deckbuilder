import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cardsRouter from "./routes/cards.js";
import cors from "cors";
import userRouter from "./routes/user.js";
import metaRouter from "./routes/meta.js";
import deckRouter from "./routes/decks.js";

const port = process.env.SERVER_PORT;
const app = express();

mongoose.connect(process.env.DATABASE_URL);

app.use(cors());
app.use(express.json());
app.use("/api/cards", cardsRouter);
app.use("/api/user", userRouter);
app.use("/api/meta", metaRouter);
app.use("/api/deck", deckRouter);
app.listen(port, () => {
  console.log("Server is listening on:" + port);
});
