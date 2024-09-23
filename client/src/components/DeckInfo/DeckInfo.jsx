import { useEffect, useState } from 'react';
import './DeckInfo.css';

function DeckInfo({ deck }) {
  const [currentDeck, setCurrentDeck] = useState(deck);

  useEffect(() => {
    setCurrentDeck(deck);
  }, [deck]);

  return (
    <div className="deckinfo">
      {currentDeck.length !== 0 ? (
        currentDeck.map((card) => (
          <div key={card.id}>{card.name}</div>
        ))
      ) : (
        <div>DECKINFO PLACEHOLDER</div>
      )}
    </div>
  );
}

export default DeckInfo;