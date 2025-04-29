import { useState } from 'react';
import { saveDeck as saveDeckToServer } from '../Utils/deckUtils.js';

const useDeck = () => {
  const [cardsInDeck, setCardsInDeck] = useState([]);
  const [deckName, setDeckName] = useState('');

  const addCard = (item) => {
    setCardsInDeck((prevCards) => {
      const cardIndex = prevCards.findIndex((card) => card._id === item.card._id);
      if (cardIndex !== -1) {
        if (prevCards[cardIndex].count < 2) {
          return prevCards.map((card, index) =>
            index === cardIndex ? { ...card, count: card.count + 1 } : card,
          );
        }
      } else {
        return [...prevCards, { ...item.card, count: 1 }];
      }
      return prevCards;
    });
  };

  const removeCard = (cardToDelete) => {
    setCardsInDeck((prevCards) => prevCards.filter((card) => card._id !== cardToDelete._id));
  };

  const resetDeck = () => {
    setCardsInDeck([]);
    setDeckName('');
  };

  const saveDeck = async () => {
    try {
      await saveDeckToServer(cardsInDeck, deckName);

      resetDeck();
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    cardsInDeck,
    deckName,
    setDeckName,
    addCard,
    removeCard,
    resetDeck,
    saveDeck,
  };
};

export default useDeck;
