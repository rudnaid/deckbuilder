import { Router } from "express";
import mongoose from "mongoose";
import Card from "../model/Card.js"

const cardsRouter = Router()

cardsRouter.get('/', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit)
        const page = parseInt(req.query.page)
        const startIndex = (page - 1) * limit
        const cards = await Card.find({}).skip(startIndex).limit(limit)
        res.status(200).json(cards)
    } catch (error) {
        res.status(404).json({ error: 'File not found' })
    }
})
export default cardsRouter