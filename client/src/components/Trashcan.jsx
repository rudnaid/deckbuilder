import { useDrop } from "react-dnd";

function Trashcan({ onDelete }) {

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'CARD-COMPACT',
    drop: (item) => {
      onDelete(item.card);

    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div className="trash">
      <div
        ref={drop}
        style={{
          backgroundColor: isOver ? 'red' : 'burlywood',
        }}>
        ❌
      </div>
    </div>
  )
}

export default Trashcan;
