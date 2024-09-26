import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import CardDisplay from "../CardDisplay/CardDisplay.jsx";
import Deck from "../Deck/Deck.jsx";
import DeckInfo from "../DeckInfo/DeckInfo.jsx";
import ClassSelector from "../ClassSelector/ClassSelector.jsx";
import FilterSettings from "../FilterSettings/FilterSettings.jsx";
import "./DeckBuilder.css";

function DeckBuilder() {
  const [cardsInDeck, setCardsInDeck] = useState([]);
  const [selectedClass, setSelectedClass] = useState();
  const [filterQueryString, setFilterQueryString] = useState();

  const handleDrop = (item) => {
    setCardsInDeck((prev) => [...prev, item.card]);
  };

  function handleSelect(chosenClass) {
    setSelectedClass(`&classId=${chosenClass},12`);
  }

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="deck-builder">
          <FilterSettings setFilter={setFilterQueryString} />

          {selectedClass ? (
            <CardDisplay selected={selectedClass} filter={filterQueryString} />
          ) : (
            <ClassSelector onClick={handleSelect} />
          )}
          <Deck onDrop={handleDrop} />
        </div>
        <div className="bottom-container">
          <DeckInfo deck={cardsInDeck} />
        </div>
      </DndProvider>
    </>
  );
}

export default DeckBuilder;
