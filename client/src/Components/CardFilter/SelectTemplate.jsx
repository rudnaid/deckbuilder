export default function SelectTemplate({label, filter, objectKey, data, onChange, type}) {
    return (
      <label>
        {label}
        <select type="select" onChange={(e) => onChange(type, e.target.value)}>
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
  