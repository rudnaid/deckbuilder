export default function ManaCost(label, setState) {
  return (
    <label>
      {label}
      <input type="text" value="0" onChange={(e) => setState(e.target.value)}>0</input>
    </label>
  );
}
