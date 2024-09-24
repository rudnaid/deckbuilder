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

      setCardsInDeck((prevCards) => {
        const cardIndex = prevCards.findIndex(card => card._id === item.card._id);
    
        if (cardIndex !== -1) {
          if (prevCards[cardIndex].count === 2) {
            return prevCards;
          }

          return prevCards.map((card, index) =>
            index === cardIndex
              ? { ...card, count: card.count ? card.count + 1 : 2 }
              : card
          );
        } else {
          return [...prevCards, { ...item.card, count: 1 }];
        }
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  // console.log(cardsInDeck);
  
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

            return <CardCompact key={idx} card={card} count={card.count} />
          })}

        </div>
      </div>
      <Trashcan onDelete={handleTrashCanDrop} />
    </div>
  );
};

export default Deck;
