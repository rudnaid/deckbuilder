import useFetchData from "../../hooks/useFetchData"
import "./ClassSelector.css"
function ClassSelector({ onClick }) {

  const { data: metaData, loading, error } = useFetchData('/api/meta');


  if (loading) return <div>Loading...</div>
  if (error) return <div>{`An error occured while fetching data: ${error.message}`}</div>

  return (
    <>
      <div className="class-selector">
        {metaData[0].classes.map((classItem, idx) => (
          <button
            key={idx}
            onClick={() => onClick(idx)}
          >
            {classItem.name}
          </button>
        )
        )}
      </div>
    </>
  )
}

export default ClassSelector;
