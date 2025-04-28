import {encode, decode} from "deckstrings";

const deck = {
	cards: [[1, 3], [2, 3], [3, 3], [4, 3]], // [dbfid, count]
	heroes: [7], // Garrosh Hellscream
	format: 1, // 1 for Wild, 2 for Standard
};

export function encodeDeckString(deck) {
  return encode(deck);
}

export function decodeDeckString(deckStr) {
  return decode(deckStr);
}
