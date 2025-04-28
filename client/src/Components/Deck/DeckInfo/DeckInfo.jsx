import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { calculateTotalManaCost, calculateCraftingCost, collectRarityData } from '../../../Utils/utils.js';
import './DeckInfo.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,);

const saveDeck = (deck) => {
  const deckToSave = deck.map((card) => {
    return { cardId: card._id, count: card.count };
  });
  return fetch("/api/deck/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(deckToSave),
  }).then((res) => res.json());
};

function DeckInfo({ deck }) {
  const [cardsInDeck, setCardsInDeck] = useState(deck);
  const [totalManaCost, setTotalManaCost] = useState(0);
  const [craftingCost, setCraftingCost] = useState(0);
  const [rarityDistribution, setRarityDistribution] = useState(null);

  useEffect(() => {
    setCardsInDeck(deck);
    setTotalManaCost(() => calculateTotalManaCost(deck));
    setCraftingCost(() => calculateCraftingCost(deck));
    setRarityDistribution(() => collectRarityData(deck));

  }, [deck]);

  const onSave = async (deck) => {
    saveDeck(deck)
      .then((res) => {
        setCardsInDeck([]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="deckinfo">
      {cardsInDeck.length !== 0 ? (
        <>
          <div className='total-mana-wrapper'>
            Total Mana Cost
            <div>{totalManaCost}</div>
          </div>
          <div className='crafting-cost-wrapper'>
            Crafting Cost
            <div>{craftingCost}</div>
          </div>
          <div className='rarity-pie'>
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
        }}/>
          </div>
          <button
            onClick={() => {
              onSave(cardsInDeck);
            }}>
            Save deck
          </button>
        </>
      ) : (
        <div>Drag some cards to the Deck</div>
      )}
    </div>
  );
}

export default DeckInfo;