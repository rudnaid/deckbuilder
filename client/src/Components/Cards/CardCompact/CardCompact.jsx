import { useDrag } from 'react-dnd';
import './CardCompact.css';
import manaCrystal from '../../../assets/images/mana-crystal.png';

const CardCompact = ({ card, count }) => {
  const [, drag] = useDrag(() => ({
    type: 'CARD-COMPACT',
    item: { card },
  }));

  return (
    <div className="cardCompact" ref={drag}>
      <div className="manaCrystalWrapper">
        <img src={manaCrystal} alt="mana crystal" />
        <div className="manaCost">{card.manaCost}</div>
      </div>

      <div className="cardImageWrapper">
        <img src={card.cropImage} alt="cropped-card-image" />
        <div className="cardName">{card.name}</div>
      </div>

      <div className="count">{count}</div>
    </div>
  );
};

export default CardCompact;
