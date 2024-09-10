import { encodeDeckString } from "../utils/deckStringCodec";

function DeckString({ deck }) {
  return (
    <>
      <div className="encoded-deckstring-container">
        <div>{encodeDeckString(deck)}</div>
      </div>
    </>
  )
}

export default DeckString;