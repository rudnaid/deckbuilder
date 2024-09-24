import { useState } from "react";
import { useDrop } from "react-dnd";
import CardCompact from '../CardCompact/CardCompact.jsx'
import './Deck.css';
import Trashcan from "../Trashcan.jsx";


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

  function handleTrashCanDrop(cardToDelete) {
    setCardsInDeck((prevCards) => prevCards.filter(card => card._id !== cardToDelete._id));
  }

  return (
    <div className="deck-container">
      <div className="deck"
        ref={drop}
        style={{
          backgroundColor: isOver ? 'lightgreen' : 'white',
        }}>

        <h3>Deck</h3>
        <div className="current-deck">

          {cardsInDeck && cardsInDeck.map((card, idx) => {
            let count = 0;
            if (cardsInDeck.includes(card)) {
              count = 1;
            }
            return <CardCompact key={idx} card={card} count={count} />
          })}

        </div>
      </div>
      <Trashcan onDelete={handleTrashCanDrop} />
    </div>
  );
};

export default Deck;
