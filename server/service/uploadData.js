import Card from '../model/Card.js';
import { readFileSync } from 'fs'

function uploadData() {
  try {
    const cards = readFileSync('./allcards.json');
    const result = JSON.parse(cards);
    result.forEach(async (element, idx) => {
      const card = await Card.create(element);
      console.log(idx);
    });
  } catch(error) {
    console.error(error);
  }
}

uploadData();
