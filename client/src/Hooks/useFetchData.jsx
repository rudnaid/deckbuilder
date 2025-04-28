import { useState, useEffect } from "react"

function useFetchData(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          setError(response.status)
        }
        const data = await response.json()
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    };
    fetchData()
  }, [url])

  return { data, error, loading }
}
export default useFetchData
