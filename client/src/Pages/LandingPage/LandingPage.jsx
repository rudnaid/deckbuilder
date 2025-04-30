import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';
import CardDisplay from '../../Components/Cards/CardDisplay/CardDisplay.jsx';
import DeckBuilder from '../../Components/Deck/DeckBuilder/DeckBuilder.jsx';
import DeckInfo from '../../Components/Deck/DeckInfo/DeckInfo.jsx';
import ClassSelector from '../../Components/ClassSelector/ClassSelector.jsx';
import CardFilter from '../../Components/CardFilter/CardFilter.jsx';
import { DeckProvider } from '../../Context/DeckContext.jsx';
import './LandingPage.css';

const LandingPage = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [filterQueryString, setFilterQueryString] = useState('');

  const handleSelect = (chosenClass) => {
    setSelectedClass(`&classId=${chosenClass},12`);
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <DeckProvider>
          <div className="deck-builder">
            <CardFilter setFilter={setFilterQueryString} />

            {selectedClass ? (
              <CardDisplay selected={selectedClass} filter={filterQueryString} />
            ) : (
              <ClassSelector onClick={handleSelect} />
            )}

            <DeckBuilder />
          </div>

          <div className="bottom-container">
            <DeckInfo />
          </div>

        </DeckProvider>
      </DndProvider>
    </>
  );
};

export default LandingPage;
