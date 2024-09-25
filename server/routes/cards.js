import { Router } from 'express';
import Card from '../model/Card.js';
import createPipeline from '../service/pipeline.js';

const cardsRouter = Router();

cardsRouter.get('/', async (req, res) => {
  const handleQueryParam = (param) => {
    if (param || param === '0') {
      if(param.includes(',')){
        const values = param.split(',').map(Number);
        return values.length > 1 ? { $in: values } : values[0];
      }
      return parseInt(param, 10)
    } else { return { $exists: true }; }

  };

  const classId = handleQueryParam(req.query.classId);
  const manaCost = handleQueryParam(req.query.manaCost);
  const rarityId = handleQueryParam(req.query.rarity);
  const cardTypeId = handleQueryParam(req.query.type);

  const query = {
    classId,
    manaCost,
    rarityId,
    cardTypeId
  }
  try {
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);
    const startIndex = (page - 1) * limit;
    const pipeline = createPipeline(query, startIndex, limit);
    const cards = await Card.aggregate(pipeline);
    console.log(cards)
    res.status(200).json(cards);
  } catch (error) {
    res.status(404).json({ error: 'File not found' });
  }
});

export default cardsRouter;
