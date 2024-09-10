import Card from "./Card"

function CardsContainer({cards}) {
  return (
    <div className="cards-container">
      {cards.map((card, index)=>{
        return (
        <>
        <Card card={card} key={index}/>
        </>
        )
      })}
    </div>
  )
}

export default CardsContainer;
