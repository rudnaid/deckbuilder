export function calculateTotalManaCost(deck) {
	let totalManaCost = 0;

	deck.forEach((card) => {
		totalManaCost += card.manaCost;
	});

	return totalManaCost;
}

export function collectRarityData(deck) {
  const rarityData = {
    labels: ["Free", "Common", "Rare", "Epic", "Legendary"],
    datasets: [
      {
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(255, 255, 255, 0.9)',
          'rgba(120, 251, 76, 0.9)',
          'rgba(47, 110, 214, 0.9)',
          'rgba(151, 61, 229, 0.9)',
          'rgba(239, 135, 51, 0.9)',
        ],
        borderWidth: 1,
      },
    ],
  };
  deck.forEach((card) => {
    rarityData.datasets[0].data[card.rarityId -1]++;
  })
  return rarityData;
}

export function calculateCraftingCost(deck) {
  let craftingCost = 0;

  deck.forEach((card) => {
    craftingCost += card.rarityData.rarityData.craftingCost[0];
  });
  return craftingCost;
}