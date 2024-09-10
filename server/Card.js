import mongoose from "mongoose";

const {Schema, model} = mongoose

const cardSchema = new Schema({
    cardId: String,
    name: String,
    img: String,
    cost: Number,
})

export default model('Card', cardSchema)