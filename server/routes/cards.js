import { Router } from "express";
import Card from "../model/Card.js"

const cardsRouter = Router();

cardsRouter.get('/', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit)
        const page = parseInt(req.query.page)
        const handleQueryParam = (param) => {
            if (!param) {
                return { $exists: true };
            }
            const values = param.split(',').map(Number);
            return values.length > 1 ? { $in: values } : values[0];  
        };

        const classId = handleQueryParam(req.query.classId);
        const manaCost = handleQueryParam(req.query.manaCost);
        const rarityId = handleQueryParam(req.query.rarity);
        const cardTypeId = handleQueryParam(req.query.type);
        const startIndex = (page - 1) * limit
        const cards = await Card.find({ manaCost, classId, rarityId, cardTypeId }).skip(startIndex).limit(limit).sort({ manaCost: 1 })
        res.status(200).json(cards)
    } catch (error) {
        res.status(404).json({ error: 'File not found' })
    }
})
export default cardsRouter;
