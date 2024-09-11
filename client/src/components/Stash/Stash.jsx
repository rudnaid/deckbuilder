import { useState } from "react";
import { useDrop } from "react-dnd";
import './Stash.css';

function Stash() {
  const [cardsInStash, setCardsInStash] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item) => {
      setCardsInStash((prevCards) => [...prevCards, item.card]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div className="stash">
      <div
        ref={drop}
        style={{
          height: '200px',
          width: '100%',
          border: '1px solid black',
          backgroundColor: isOver ? 'lightgreen' : 'white',
          color: 'black'
        }}
      >
        {/* ToDO: key index? validation if exist already? */}
        <h3>Stash</h3>
        <ul>
          {cardsInStash.map((card) => (
            <li
              key={card.id}
              style={{ color: 'black' }}
            >
              {card.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stash;
