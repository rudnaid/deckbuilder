import Card from "./Card"

const card = {
  _id: {
    $oid: "66e011a07e30d04216e01059"
  },
  id: 107923,
  classId: 9,
  name: "Health Drink",
  image: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cd810f10539417c0a9ac6d7e990db3fc83e51416e4c2a53379c31f6e26f221a1.png",
  cardTypeId: 5,
  rarityId: 3,
  manaCost: 3,
  __v: 0
}

function CardsContainer() {
  return (
    <div className="cards-container">
      <Card card={card}/>
      <Card card={'card'}/>
      <Card card={'card'}/>
      <Card card={'card'}/>
    </div>
  )
}

export default CardsContainer;
