import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import Card from "./Card.js";
import User from "./model/User.js";
import bodyParser from "body-parser";
import { readFileSync } from "fs";
const port = process.env.SERVER_PORT;
const app = express();
mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());
app.use(bodyParser.json({ limit: "1000mb" }));

app.post("/api/validatelogin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username, password: password });

  if (user) {
    res.status(200).json({ login: true });
  } else {
    res.status(401).json({ login: false });
  }
});

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({
    username,
    password,
  });
  try {
    const newUser = await user.save();
    res.status(200).json({ user: "registered" });
  } catch (error) {
    res.status(401).json({ success: "false" });
  }
});

app.listen(port, () => {
  console.log("Server is listening on:" + port);
});
