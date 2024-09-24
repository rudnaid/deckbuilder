export default function ManaCost({ onClick }) {
  const totalCost = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {totalCost.map((cost, idx) => (
        <input type="button"
          key={idx}
          onClick={(e) => onClick('manaCost', e.target.value)}
          value={cost}/>
      ))}
    </>
  );
}
