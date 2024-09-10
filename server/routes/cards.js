import { Router } from "express";
import mongoose from "mongoose";

const cardsRouter = Router()

cardsRouter.get('/', async(req,res)=>{
    const cards = await Card.find({})
})
export default cardsRouter