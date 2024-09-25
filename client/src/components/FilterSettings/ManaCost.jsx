export default function ManaCost({ onClick }) {
  const totalCost = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="manaCrystalWrapper" >
      {totalCost.map((cost, idx) => (
        <div 
          key={idx} 
          
          onClick={() => onClick('manaCost', cost)}
        >
          <img src={'./mana-crystal.png'} alt={`Mana cost ${cost}`} className="manaCrystal"/>
          <div className="manaCost">{cost}</div>
        </div>
      ))}
    </div>
  );
}