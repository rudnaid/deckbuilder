import { Router } from 'express';
import User from '../model/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
import authMiddleware from '../auth/authMiddleware.js';
import 'dotenv/config';

const userRouter = Router();

userRouter.post(
  '/register',
  [
    check('username', 'Username is required').exists(),
    check('password', 'Password must be 6+ characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      let user = await User.findOne({ username });

      if (user) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({ username, password: hashedPassword });
      await user.save();

      const payload = { user: { username: user.username } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
);

userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const payload = { user: { username: user.username } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1y' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

userRouter.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username }).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default userRouter;
