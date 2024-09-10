import { useEffect, useState } from "react";
import Card from './Card';

function CardDisplay() {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        
    },[])


  return (
    <>
      <div className="card-display">
        <Card />
      </div>
    </>
  )
}

export default CardDisplay;
