import { useDrag } from 'react-dnd';
import "./CardCompact.css"
function CardCompact({ card }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { card },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(card);
  
  return (
    <>
      <div className="card-small-container" ref={drag}>
        <img className='cropped' src={card.cropImage} alt="cropped-card-image"></img>
      </div>
    </>
  )
}

export default CardCompact;
