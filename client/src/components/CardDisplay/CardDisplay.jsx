import { useEffect, useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import FilterSettings from '../FilterSettings/FilterSettings.jsx';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'; 
import CardsContainer from '../CardsContainer/CardsContainer';
import './CardDisplay.css';

function CardDisplay() {
    const [cards, setCards]=useState(null)
    const [page, setPage] = useState(1);
    const {data, loading, error} = useFetchData(`http://localhost:3000/api/cards?page=${page}&limit=20`);

    const [filteredData, setFilteredData] = useState(data);
    
    if (!cards) {
        setCards(data)
    }

    if(loading){
        return <div>loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
    console.log(data)
  return (
    <>
      <div className="card-display">
        <CardsContainer cards={filteredData}/>
      </div>
    </>
  )
}

export default CardDisplay;
