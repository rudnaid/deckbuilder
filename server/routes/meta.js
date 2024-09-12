import { Router } from 'express';
import mongoose from 'mongoose';

const metaRouter = Router();

metaRouter.get('/', async (req, res) => {
	try {
		const result = await mongoose.connection.db
			.collection('meta')
			.find()
			.toArray();
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});
export default metaRouter;
