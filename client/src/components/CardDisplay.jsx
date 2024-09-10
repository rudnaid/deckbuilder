import { useEffect, useState } from 'react';
import Card from './Card';
import useFetchData from '../Hooks/useFetchData';
import FilterSettings from './FilterSettings';
function CardDisplay() {
    const [cards, setCards]=useState(null)
    const {data, loading, error} = useFetchData('http://localhost:3000/api/cards');

    if (!cards) {
        setCards(data)
    }

    if(loading){
        return <div>loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }

  return (
    <>
        <FilterSettings />
      <div className="card-display">
        <Card />
      </div>
    </>
  )
}

export default CardDisplay;
