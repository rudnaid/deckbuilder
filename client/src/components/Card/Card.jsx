import { useDrag } from 'react-dnd';
import './Card.css';

function Card({ card }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { card },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1
      }}
      className={"card"}
    >
      <img src={card.image}  ></img>
    </div>
  );
}

export default Card;
