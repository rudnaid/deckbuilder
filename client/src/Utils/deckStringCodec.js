import { decode, encode } from 'deckstrings';

export function encodeDeckString(deck) {
  return encode(deck);
}

export function decodeDeckString(deckStr) {
  return decode(deckStr);
}
