import { Router } from "express";
import Card from "../model/Card.js"

const cardsRouter = Router();

cardsRouter.get('/', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit)
        const page = parseInt(req.query.page) 
        const classId = parseInt(req.query.classId) || {$exists: true}
        const manaCost = parseInt(req.query.manaCost) || { $exists: true }
        const startIndex = (page - 1) * limit
        const cards = await Card.find({manaCost, classId}).skip(startIndex).limit(limit)
        res.status(200).json(cards)
    } catch (error) {
        res.status(404).json({ error: 'File not found' })
    }
})
export default cardsRouter;
