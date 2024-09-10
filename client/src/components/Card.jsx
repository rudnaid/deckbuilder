import { useDrag } from 'react-dnd';

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
        opacity: isDragging ? 0.5 : 1,
        padding: '8px',
        border: '1px solid gray',
        marginBottom: '4px'
      }}
      className={isDragging ? "active-drag" : "card"}
    >
      {isDragging ? 'DRAG' : 'card'}
      <img src={card.image} width="269" height="372" ></img>
    </div>
  );
}

export default Card;