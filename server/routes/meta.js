import { Router } from 'express';
import mongoose from 'mongoose';
import authMiddleware from '../auth/authMiddleware.js';

const metaRouter = Router();

metaRouter.get('/', authMiddleware, async (req, res) => {
  try {
    const result = await mongoose.connection.db.collection('meta').find().toArray();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default metaRouter;
