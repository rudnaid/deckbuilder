export const saveDeck = async (deck, deckName) => {
  const deckToSave = {
    name: deckName,
    cards: [
      ...deck.map((card) => {
        return { cardId: card._id, count: card.count };
      }),
    ],
  };

  return fetch('/api/deck/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },

    body: JSON.stringify(deckToSave),
  }).then((res) => res.json());
};
