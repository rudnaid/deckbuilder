import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import { readFileSync } from "fs";
const port = process.env.SERVER_PORT;
const app = express();
mongoose.connect(process.env.DATABASE_URL);
app.use(cors());
app.use(express.json());


app.listen(port, () => {
  console.log("Server is listening on:" + port);
});
