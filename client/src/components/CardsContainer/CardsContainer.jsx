import Card from "../Card/Card"
import './CardsContainer.css';

function CardsContainer({ cards }) {
  return (
    <div className="cards-container">
      {cards.map((card, index) => {
        return (
          <>
            <Card
              card={card}
              key={index}
            />
          </>
        )
      })}
    </div>
  )
}

export default CardsContainer;
