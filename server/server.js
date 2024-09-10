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
