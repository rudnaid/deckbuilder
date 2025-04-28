#!/bin/bash

set -e
echo "Starting MongoDB restore..."

mongorestore --drop --db deckbuilder --collection cards /dump/cards.bson
mongorestore --drop --db deckbuilder --collection decks /dump/decks.bson
mongorestore --drop --db deckbuilder --collection meta /dump/meta.bson
mongorestore --drop --db deckbuilder --collection users /dump/users.bson

echo "MongoDB restore completed!"