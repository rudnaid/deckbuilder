import { useEffect } from 'react';
import CardsContainer from '../CardsContainer/CardsContainer.jsx';
import { useInView } from "react-intersection-observer";
import useInfiniteCards from '../../../hooks/useInfiniteCards';

const CardDisplay = ({ selected, filter }) => {
  const { ref, inView } = useInView();
  const {
    data,
    error,
    status,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteCards(selected, filter);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending') return <div>loading...</div>;
  if (status === 'error') return <div>{error.message}</div>;

  const allCards = data.pages.flat();

  return (
    <div className="card-display">
      <CardsContainer cards={allCards} refe={ref} isFetchingNextPage={isFetchingNextPage} />
    </div>
  );
}

export default CardDisplay;
