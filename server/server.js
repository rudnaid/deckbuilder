import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import Card from "./Card.js"
import bodyParser from "body-parser"
import {readFileSync} from "fs"
const port = process.env.SERVER_PORT
const app = express()
mongoose.connect(process.env.DATABASE_URL)
app.use(express.json())
app.use(bodyParser.json({limit: '1000mb'}));
app.post('/api/cards', async (req,res)=>{
    console.log(req.socket.bytesRead)
    const cards= req.body
    for (const classes of cards) {
        for (const classCard of classes) {
            if(Object.hasOwn(classCard, 'cost') && Object.hasOwn(classCard, 'img')&& (classCard.type==='Spell' || classCard.type==='Minion' || classCard.type==='Location' )){
                const card= await Card.create(classCard)
                await card.save();
                console.log(card)
            }
        }
    }
    res.json('ok')



})
async function post() {
    const cards = JSON.parse(readFileSync('./data.json', 'UTF-8'));
    console.log(cards)
    let filteredData = []
    for (const classes of cards) {
      for (const classCard of classes) {
          if(classCard.cost>0 && Object.hasOwn(classCard, 'img')&& (classCard.type==='Spell' || classCard.type==='Minion' || classCard.type==='Location' )){
            const card= await Card.create(classCard)
            await card.save();
            console.log(card)
          }
      }
  }
}

post()
app.listen(port, ()=>{
    console.log('Server is listening on:'+port)
})