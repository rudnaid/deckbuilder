import { encodeDeckString } from '../../../Utils/deckStringCodec.js';

function DeckString({ deck }) {
  return (
    <>
      <div className="encoded-deckstring-container">
        <div>{encodeDeckString(deck)}</div>
      </div>
    </>
  );
}

export default DeckString;
