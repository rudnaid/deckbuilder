import CardDisplay from "./CardDisplay";
import Stash from "./Stash";
import Deck from "./Deck";
import DeckInfo from "./DeckInfo";

function DeckBuilder() {
  return (
    <>
      <div className="deck-builder">
        <CardDisplay />
        <Stash />
        <Deck />
        <DeckInfo />
      </div>
    </>
  )
}

export default DeckBuilder;
