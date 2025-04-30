import manaCrystal from '../../assets/images/mana-crystal.png';

const ManaCostSelector = ({ onClick }) => {
  const totalCost = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="manaCostWrapper">
      {totalCost.map((cost, idx) => (
        <div className="manacost" key={idx} onClick={() => onClick('manaCost', cost)}>
          <img src={manaCrystal} alt={`Mana cost ${cost}`} className="manaCrystal" />
          <div>{cost}</div>
        </div>
      ))}
    </div>
  );
};

export default ManaCostSelector;
