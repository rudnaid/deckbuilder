import { useDrag } from 'react-dnd';

function CardCompact({ card }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD-COMPACT',
    item: { card },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  
  return (
    <>
      <div className="card-small-container" ref={drag}>
        <img src={card.cropImage} alt="cropped-card-image"></img>
      </div>
    </>
  )
}

export default CardCompact;
