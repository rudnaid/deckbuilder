import Card from "../Card/Card"
import './CardsContainer.css';

function CardsContainer({ cards,refe, isFetchingNextPage}) {
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
    <div ref={refe} style={{ height: '1px' }}>{isFetchingNextPage && 'loading'}</div>
    </div>
  )
}

export default CardsContainer;
