import { useEffect } from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from "react-intersection-observer"

function CardDisplay() {

  const LIMIT = 20; 
  const fetchCards = async ({ pageParam = 1 }) => {
    const response = await fetch(`/api/cards?page=${pageParam}&limit=${LIMIT}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const newCards = await response.json();
    return newCards;
  };
  
  const { data, error, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['cards'],
    queryFn: fetchCards,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === LIMIT ? allPages.length + 1 : undefined;
    },
  })

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView])

  if (status === 'pending') {
    return <div>loading...</div>
  }
  if (status === 'error') {
    return <div>{error.message}</div>
  }

  const allCards=data.pages.flat();
  
  return (
    <>
      <div className="card-display">
        <CardsContainer cards={allCards} />
        <div ref={ref} style={{ height: '1px' }}>{isFetchingNextPage && 'loading'}</div>
      </div>
    </>
  )
}

export default CardDisplay;
