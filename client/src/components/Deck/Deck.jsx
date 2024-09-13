import { useState } from "react";
import { useDrop } from "react-dnd";
import CardCompact from '../CardCompact/CardCompact.jsx'
import './Deck.css';


function Deck({ onDrop }) {
  const [cardsInDeck, setCardsInDeck] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item) => {
      onDrop(item);
      setCardsInDeck((prevCards) => [...prevCards, item.card])

    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div className="deck-container" ref={drop}
>
      <div className="deck"
      >
        <h3>Deck</h3>
        <div className="current-deck-container">
          {cardsInDeck.map((card, idx) => {
            return <CardCompact key={idx} card={card} />
          })}
        </div>
      </div>

    </div>
  );
};

export default Deck;
