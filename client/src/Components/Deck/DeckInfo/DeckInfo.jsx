import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { calculateCraftingCost, calculateTotalManaCost, collectRarityData } from '../../../Utils/helperUtils.js';
import { useDeckContext } from '../../../Context/DeckContext.jsx';
import './DeckInfo.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DeckInfo = () => {
  const { cardsInDeck, saveDeck } = useDeckContext();
  const [totalManaCost, setTotalManaCost] = useState(0);
  const [craftingCost, setCraftingCost] = useState(0);
  const [rarityDistribution, setRarityDistribution] = useState(null);

  useEffect(() => {
    setTotalManaCost(() => calculateTotalManaCost(cardsInDeck));
    setCraftingCost(() => calculateCraftingCost(cardsInDeck));
    setRarityDistribution(() => collectRarityData(cardsInDeck));
  }, [cardsInDeck]);

  return (
    <div className="deckinfo">
      {cardsInDeck.length !== 0 ? (
        <>
          <div className="total-mana-wrapper">
            Total Mana Cost
            <div>{totalManaCost}</div>
          </div>

          <div className="crafting-cost-wrapper">
            Crafting Cost
            <div>{craftingCost}</div>
          </div>

          <div className="rarity-pie">
            <Bar
              data={rarityDistribution}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>

          <button
            onClick={saveDeck}
          >
            Save Deck
          </button>
        </>
      ) : (
        <div>Drag some cards to the Deck</div>
      )}
    </div>
  );
};

export default DeckInfo;
