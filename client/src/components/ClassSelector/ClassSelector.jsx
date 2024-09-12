import useFetchData from "../../hooks/useFetchData"

function ClassSelector({ onSelect }) {

  const { data: metaData, loading, error } = useFetchData('/api/meta');


  function handleClick(idx) {
    const chosenClass = metaData[0].classes[idx];
    onSelect(chosenClass);

  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{`An error occured while fetching data: ${error.message}`}</div>

  return (
    <>
      <div className="class-selector">
        {metaData[0].classes.map((classItem, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
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
