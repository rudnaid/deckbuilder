export default function InputTemplate({label, filter, objectKey, data, setState}) {
    return (
      <label>
        {label}
        <select type="select" onChange={(e) => setState(e.target.value)}>
          <option value="all">All</option>
          {data[filter].map((item, index) => (
            <option key={index} value={item.id}>
              {item[objectKey]}
            </option>
          ))}
        </select>
      </label>
    );
  }
  