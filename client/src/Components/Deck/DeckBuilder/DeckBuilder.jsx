import { useDrop } from 'react-dnd';
import CardCompact from '../../Cards/CardCompact/CardCompact.jsx';
import CardDropZone from '../CardDropZone/CardDropZone.jsx';
import { useDeckContext } from '../../../Context/DeckContext.jsx';
import './DeckBuilder.css';

const DeckBuilder = () => {
  const {
    cardsInDeck,
    deckName,
    setDeckName,
    addCard,
    removeCard,
    saveDeck,
  } = useDeckContext();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item) => {
      addCard(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <>
      <div className="deck" ref={drop}>
        <div className="top-container-wrapper">
          <div className="top-container">
            <h3>Deck</h3>
            <input
              type="text"
              placeholder="deckname"
              value={deckName}
              onChange={(e) => setDeckName(e.target.value)}
            />
          </div>
        </div>

        <div className="current-deck">
          {cardsInDeck.map((card) => (
            <CardCompact key={card._id} card={card} count={card.count} />
          ))}
        </div>

        <div className="bottom-bar-wrapper">
          <div className="deck-bottom">
            <CardDropZone onDelete={removeCard} />
            <button
              onClick={saveDeck}
            >
              Save Deck
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeckBuilder;
