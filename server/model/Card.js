import mongoose from "mongoose";

const {Schema, model} = mongoose

const cardSchema = new Schema({
    id: Number,
    classId: Number,
    name: String,
    image: String,
    cardTypeId: Number,
    rarityId: Number,
    manaCost: Number,
    attack: Number,
    health: Number,
})

export default model('Card', cardSchema)