import Card from "./Card"

function CardsContainer({cards}) {
  return (
    <div className="cards-container">
      {cards.map((card, index)=>{
        return (
        <div key={index}>
        <Card card={card} key={index}/>
        </div>
        )
      })}
    </div>
  )
}

export default CardsContainer;
