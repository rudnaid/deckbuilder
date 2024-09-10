import { Router } from "express";
import mongoose from "mongoose";
import Card from "../model/Card.js"

const cardsRouter = Router()

cardsRouter.get('/', async(req,res)=>{
    try {
        const cards = await Card.find({})
        res.status(200).json(cards)
    } catch (error) {
        res.status(404).json({error:'File not found'})
    }
})
export default cardsRouter