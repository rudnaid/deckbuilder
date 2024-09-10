function DeckInfo({ deck }) {
  return (
    <div className="deckinfo">
      {deck.map((card) => (
        <div key={card.id}>{card.name}</div>
      ))}
    </div>
  )
}

export default DeckInfo;
