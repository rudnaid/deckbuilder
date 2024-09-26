import { useRef, useState } from "react";
import { useDrop } from "react-dnd";
import CardCompact from "../CardCompact/CardCompact.jsx";
import "./Deck.css";
import Trashcan from "../Trashcan.jsx";

const saveDeck = async (deck, deckname) => {
  const deckToSave = {
    name: deckname,
    cards: [
      ...deck.map((card) => {
        return { cardId: card._id, count: card.count };
      }),
    ],
  };
  console.log(deckToSave);
  return fetch("/api/deck/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deckToSave),
  }).then((res) => res.json());
};

function Deck({ onDrop }) {
  const [cardsInDeck, setCardsInDeck] = useState([]);
  const deckName = useRef();
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "CARD",
    drop: (item) => {
      onDrop(item);

      setCardsInDeck((prevCards) => {
        const cardIndex = prevCards.findIndex(
          (card) => card._id === item.card._id
        );

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

  const onSave = async (deck) => {
    console.log(deckName);
    saveDeck(deck, deckName.current)
      .then((res) => {
        setCardsInDeck([]);
      })
      .catch((error) => console.log(error));
  };

  function handleTrashCanDrop(cardToDelete) {
    setCardsInDeck((prevCards) =>
      prevCards.filter((card) => card._id !== cardToDelete._id)
    );
  }

  return (
    // <div className="deck-container" ref={drop}
    // >
    <>
      <div
        className="deck"
        ref={drop}
        style={
          {
            // backgroundColor: isOver ? "lightgreen" : "burlywood",
          }
        }
      >
        <div className="top-container-wrapper">
          <div className="top-container">
            <h3>Deck</h3>
            <input
              type="text"
              placeholder="deckname"
              onChange={(e) => (deckName.current = e.target.value)}
            />
          </div>
        </div>
        <div className="current-deck">
          {cardsInDeck &&
            cardsInDeck.map((card) => {
              return (
                <CardCompact key={card._id} card={card} count={card.count} />
              );
            })}
        </div>
        <div className="bottom-bar-wrapper">
          <div className="deck-bottom">
            <Trashcan onDelete={handleTrashCanDrop} />
            <button
              onClick={() => {
                onSave(cardsInDeck, deckName);
              }}
            >
              Save deck
            </button>
          </div>
        </div>
      </div>
    </>

    // </div>
  );
}

export default Deck;
