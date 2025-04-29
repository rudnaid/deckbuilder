import { createContext, useContext } from 'react';
import useDeck from '../Hooks/useDeck';

const DeckContext = createContext(null);

export const DeckProvider = ({ children }) => {
  const deckState = useDeck();

  return (
    <DeckContext.Provider value={deckState}>
      {children}
    </DeckContext.Provider>
  );
};

export const useDeckContext = () => {
   return useContext(DeckContext);
};
