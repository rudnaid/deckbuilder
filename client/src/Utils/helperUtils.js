import { decode, encode } from 'deckstrings';

export function calculateTotalManaCost(deck) {
  let totalManaCost = 0;

  deck.forEach((card) => {
    totalManaCost += card.manaCost;
  });

  return totalManaCost;
}

export function collectRarityData(deck) {
  const rarityData = {
    labels: ['Free', 'Common', 'Rare', 'Epic', 'Legendary'],
    datasets: [
      {
        label: 'Card Rarity Distribution',
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(255, 255, 255, 0.9)', // Free
          'rgba(120, 251, 76, 0.9)', // Common
          'rgba(47, 110, 214, 0.9)', // Rare
          'rgba(151, 61, 229, 0.9)', // Epic
          'rgba(239, 135, 51, 0.9)', // Legendary
        ],
        borderWidth: 0,
      },
    ],
  };

  deck.forEach((card) => {
    rarityData.datasets[0].data[card.rarityId - 1]++;
  });

  return rarityData;
}

export function calculateCraftingCost(deck) {
  let craftingCost = 0;

  deck.forEach((card) => {
    craftingCost += card.rarityData.rarityData.craftingCost[0];
  });
  return craftingCost;
}

export const createQueryString = (filters) => {
  const queryString = new URLSearchParams(filters);
  return queryString.toString();
};

export function encodeDeckString(deck) {
  return encode(deck);
}

export function decodeDeckString(deckStr) {
  return decode(deckStr);
}
