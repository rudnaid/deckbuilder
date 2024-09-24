import { Router } from 'express';
import Card from '../model/Card.js';
import createPipeline from '../service/pipeline.js';

const cardsRouter = Router();

cardsRouter.get('/', async (req, res) => {
  const query = {};
  if (req.query.classId) query.classId = parseInt(req.query.classId);
  if (req.query.manaCost) query.manaCost = parseInt(req.query.manaCost);
  if (req.query.rarityId) query.rarityId = parseInt(req.query.rarityId);
  if (req.query.cardTypeId) query.cardTypeId = parseInt(req.query.cardTypeId);

	try {
		const limit = parseInt(req.query.limit);
		const page = parseInt(req.query.page);
		const startIndex = (page - 1) * limit;
    const pipeline = createPipeline(query, startIndex, limit);
		const cards = await Card.aggregate(pipeline);
		res.status(200).json(cards);
	} catch (error) {
		res.status(404).json({ error: 'File not found' });
	}
});
export default cardsRouter;
