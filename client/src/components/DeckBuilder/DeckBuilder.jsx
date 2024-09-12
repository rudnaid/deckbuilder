import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from "react";
import CardDisplay from "../CardDisplay/CardDisplay.jsx";
import Stash from "../Stash/Stash.jsx";
import Deck from "../Deck/Deck.jsx";
import DeckInfo from "../DeckInfo/DeckInfo.jsx"
import ClassSelector from "../ClassSelector/ClassSelector.jsx"
import FilterSettings from "../FilterSettings/FilterSettings.jsx";
import './DeckBuilder.css';

function DeckBuilder() {
  const [cardsInDeck, setCardsInDeck] = useState([]);
  const [selectedClass, setSelectedClass] = useState();
  const [queryString, setQueryString] = useState();

  const handleDrop = (item) => {
    setCardsInDeck((prev) => [...prev, item.card]);
  };

  function handleSelect(chosenClass) {
    setSelectedClass(chosenClass);
  }

  return (
    <div className="deck-builder">
      <FilterSettings updateData={setQueryString}/>
      <DndProvider backend={HTML5Backend}>
        <CardDisplay onSelect={handleSelect}/>
        <DeckInfo deck={cardsInDeck} />
        <div className="bottom-container">
          <Stash />
          <Deck onDrop={handleDrop} />
        </div>
      </DndProvider>
    </div>
  )
}

export default DeckBuilder;
