import { useRef } from 'react';
import useFetchData from '../../Hooks/useFetchData';
import { createQueryString } from '../../Utils/utils.js';
import SelectTemplate from './SelectTemplate.jsx';
import ManaCostSelector from './ManaCostSelector.jsx';
import './CardFilter.css';

const CardFilter = ({ setFilter }) => {
  const { filterOptions } = useRef();
  const { data: metaData, loading, error } = useFetchData('/api/meta');

  const handleFilter = (type, value) => {
    filterOptions.current = { ...filterOptions.current, [type]: value };
    setFilter(createQueryString(filterOptions.current));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  return (
    <div className="filter-settings">
      <form>
        <SelectTemplate
          label="Type"
          filter="types"
          objectKey="name"
          type="type"
          data={metaData[0]}
          onChange={handleFilter}
        />

        <SelectTemplate
          label="Rarity"
          filter="rarities"
          objectKey="slug"
          type="rarity"
          data={metaData[0]}
          onChange={handleFilter}
        />

        <ManaCostSelector onClick={handleFilter} />
      </form>
    </div>
  );
};

export default CardFilter;
