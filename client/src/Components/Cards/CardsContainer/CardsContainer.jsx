import Card from "../Card/Card.jsx"
import './CardsContainer.css';

const CardsContainer = ({ cards, refe, isFetchingNextPage}) => {
  return (
    <div className="cards-container">
      {cards.map((card) => {
        return (
          <>
            <Card
              card={card}
              key={card._id}
            />
          </>
        )
      })}
    <div ref={refe} style={{ height: '1px' }}>{isFetchingNextPage}</div>
    </div>
  )
}

export default CardsContainer;
