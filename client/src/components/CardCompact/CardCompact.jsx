import { useDrag } from 'react-dnd';
import './CardCompact.css';

function CardCompact({ card, count }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD-COMPACT',
    item: { card },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="cardCompact" ref={drag}>
      <div className="manaCrystalWrapper">
        <img src="/mana-crystal.png" alt="mana crystal" />
        <div className="manaCost">{card.manaCost}</div>
      </div>

      <div className="cardImageWrapper">
        <img src={card.cropImage} alt="cropped-card-image" />
        <div className="cardName">{card.name}</div>
      </div>

      <div className="count">{count}</div>
    </div>
  );
}

export default CardCompact;
