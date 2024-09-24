import "./FilterSettings.css";
import { useState, useEffect, useRef } from "react";
import InputTemplate from "./InputTemplate";
import ManaCost from "./ManaCost";
import useFetchData from "../../hooks/useFetchData";

function FilterSettings({ setFilter }) {
  const filterOptions = useRef()
  const { data: metaData, loading, error } = useFetchData("/api/meta");

  const createQueryString = (filters) => {
    const queryString = new URLSearchParams(filters);
    console.log(queryString.toString())
    setFilter(queryString.toString())
  };
  const handleFilter = (type, value) =>{
    filterOptions.current = {...filterOptions.current, [type]:value}
    createQueryString(filterOptions.current)
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  return (
    <div className="filter-settings">
      FilterSettings
      <form>

        <InputTemplate
          label="Type"
          filter="types"
          objectKey="name"
          type="type"
          data={metaData[0]}
          onChange={handleFilter}

        />
        <InputTemplate
          label="Rarity"
          filter="rarities"
          objectKey="slug"
          type="rarity"
          data={metaData[0]}
          onChange={handleFilter}
        />
        <ManaCost onClick={handleFilter} />
      </form>
    </div>
  );
}

export default FilterSettings;
