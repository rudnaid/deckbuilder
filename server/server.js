<<<<<<< HEAD
import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import cardsRouter from "./routes/cards.js"
import cors from "cors"
const port = process.env.SERVER_PORT
const app = express()
mongoose.connect(process.env.DATABASE_URL)
app.use(cors())
app.use(express.json())
app.use('/api/cards', cardsRouter)
app.listen(port, ()=>{
    console.log('Server is listening on:'+port)
})
=======
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import Card from './Card.js';
import bodyParser from 'body-parser';
import { readFileSync } from 'fs';

const port = process.env.SERVER_PORT;
const app = express();

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

app.use(bodyParser.json({ limit: '1000mb' }));

app.listen(port, () => {
	console.log('Server is listening on:' + port);
});
>>>>>>> 01eb6cf6631d400e63a3941acd4282f84cfffae3
