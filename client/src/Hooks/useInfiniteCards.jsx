import {useInfiniteQuery} from '@tanstack/react-query';

const LIMIT = 20;

const fetchCards = async ({pageParam = 1, selected = "", filter = ""}) => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`/api/cards?page=${pageParam}&limit=${LIMIT}${selected}${filter}`, {
      method: "GET",
      headers: {"Authorization": `Bearer ${token}`}
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const useInfiniteCards = (selected, filter) => {
  const query = useInfiniteQuery({
    queryKey: ['cards', selected, filter],
    queryFn: ({pageParam = 1}) => fetchCards({pageParam, selected, filter}),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === LIMIT ? allPages.length + 1 : undefined;
    },
  });

  return query;
}

export default useInfiniteCards;
