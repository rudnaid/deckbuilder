import { Router } from "express";
import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";
import authMiddleWare from "../auth/authMiddleware.js";
import "dotenv/config";



const userRouter = Router();

userRouter.post(
  "/login",
  [
    check("username", "please include valis username").exists(),
    check("password", "password is required").exists(),
  ],
  authMiddleWare,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      let user = await User.findOne({ username: username });
      if (!user) {
        return res.status(400).json({ msg: "invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "invalid credentials" });
      }

      const payload = {
        user: {
          id: user._id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1y" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      if (error) throw error;
      console.error(error.message);
    }
  }
);

userRouter.post(
  "/register",
  [
    check("username", "Please provide valid email").exists(),
    check("password", "Please provide a pw with 6 or more").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      let user = await User.findOne({
        username,
      });

      if (user) {
        return res.status(400).json({ msg: "user already exists" });
      }

      user = new User({
        username,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user._id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: "false" });
    }
  }
);

userRouter.get("/profile",authMiddleWare , async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

export default userRouter;
