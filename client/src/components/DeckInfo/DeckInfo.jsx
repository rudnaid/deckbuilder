import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { calculateTotalManaCost, calculateCraftingCost, collectRarityData } from '../../utils/utils';
import './DeckInfo.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function DeckInfo({ deck }) {
  const [currentDeck, setCurrentDeck] = useState(deck);
  const [totalManaCost, setTotalManaCost] = useState(0);
  const [craftingCost, setCraftingCost] = useState(0);
  const [rarityDistribution, setRarityDistribution] = useState(null);

  useEffect(() => {
    setCurrentDeck(deck);
    setTotalManaCost(() => calculateTotalManaCost(deck));
    setCraftingCost(() => calculateCraftingCost(deck));
    setRarityDistribution(() => collectRarityData(deck));

  }, [deck]);

  return (
    <div className="deckinfo">
      {currentDeck.length !== 0 ? (
        <>
          <div className='total-mana-wrapper'>Total Mana Cost
            <div>{totalManaCost}</div>
          </div>
          <div className='crafting-cost-wrapper'>Crafting Cost
            <div>{craftingCost}</div>
          </div>
          <div className='rarity-pie'>
            <Pie data={rarityDistribution} />
          </div>
        </>
      ) : (
        <div>No cards in deck yet</div>
      )}
    </div>
  );
}

export default DeckInfo;