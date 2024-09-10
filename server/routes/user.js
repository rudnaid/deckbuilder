import { Router } from "express";
import User from "../model/User.js";

const userRouter = Router();

userRouter.post("/validatelogin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username, password: password });

  if (user) {
    res.status(200).json({ login: true });
  } else {
    res.status(401).json({ login: false });
  }
});

userRouter.post("/register", async (req, res) => {
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

export default userRouter;
