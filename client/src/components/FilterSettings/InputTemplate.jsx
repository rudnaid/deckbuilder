export default function InputTemplate({label, filter, key, data, setState}) {
    return (
      <label>
        {label}
        <input type="select" onChange={(e) => setState(e.target.value)}>
          <option value="all">All</option>
          {data[filter].map((item, index) => (
            <option key={index} value={item.id}>
              {item[key]}
            </option>
          ))}
        </input>
      </label>
    );
  }
  