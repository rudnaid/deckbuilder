import { useEffect, useState } from 'react';
import { fetchFromApi } from '../Utils/apiUtils.js';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const data = await fetchFromApi(url);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData().then(() => {});
  }, [url]);

  return { data, error, loading };
};

export default useFetchData;
