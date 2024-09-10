import CardDisplay from "./CardDisplay";
import Stash from "./Stash";
import Deck from "./Deck";
import DeckInfo from "./DeckInfo";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from "react";

function DeckBuilder() {
  const [cardsInDeck, setCardsInDeck] = useState([]);

  const handleDrop = (item) => {
    setCardsInDeck((prev) => [...prev, item.card]);
  };

  return (
    <div className="deck-builder">
      <DndProvider backend={HTML5Backend}>
        <CardDisplay />
        <Stash />
        <Deck onDrop={handleDrop} />
        <DeckInfo deck={cardsInDeck} />
      </DndProvider>
    </div>
  )
}

export default DeckBuilder;
