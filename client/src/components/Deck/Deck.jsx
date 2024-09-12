import { useState } from "react";
import { useDrop } from "react-dnd";
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
      <div className="deck"
        ref={drop}
        style={{
          backgroundColor: isOver ? 'lightgreen' : 'white',
        }}
      >
        <h3>Deck</h3>
        <ul>
          {cardsInDeck.map((card) => (
            <li
              key={card.id}
              style={{ color: 'black' }}
            >
              {card.name}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Deck;
