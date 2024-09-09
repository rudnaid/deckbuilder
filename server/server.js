import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'

const port = process.env.SERVER_PORT
const app = express()
mongoose.connect(process.env.DATABASE_URL)
app.use(express.json())




app.listen(port, ()=>{
    console.log('Server is listening on:'+port)
})