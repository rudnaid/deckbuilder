export function calculateTotalManaCost(deck) {
	let totalManaCost = 0;

	deck.forEach((card) => {
		totalManaCost += card.manaCost * card.count;
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
          'rgba(255, 99, 132, 0.2)',
          'rgba(154, 162, 235, 0.2)',
          'rgba(134, 162, 235, 0.2)',
          'rgba(55, 162, 235, 0.2)',
          'rgba(59, 162, 235, 0.2)',
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
    // placeholders for now
    craftingCost += card.rarityData.rarityData.craftingCost[0];
  });
  return craftingCost;
}