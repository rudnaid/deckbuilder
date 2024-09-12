import "./FilterSettings.css";
import { useState, useEffect } from "react";
import InputTemplate from "./InputTemplate";
import ManaCost from "./ManaCost";
import useFetchData from "../../hooks/useFetchData";

function FilterSettings({ setFilter }) {
  const [classId, setClassId] = useState();
  const [type, setType] = useState();
  const [rarity, setRarity] = useState();
  const [manaCost, setManaCost] = useState();

  const { data: metaData, loading, error } = useFetchData("/api/meta");

  const createQueryString = () => {
    const params = new URLSearchParams();
    if (classId ) params.append("classId", classId);
    if (type) params.append("type", type);
    if (rarity) params.append("rarity", rarity);
    if (manaCost) params.append("manaCost", manaCost);
    if (params.has('classId') || params.has('type')|| params.has('rarity')|| params.has('manaCost')) {
      return "&"+params.toString();
    }else {
      return ''
    }

  };

  useEffect(() => {
    // Update filter state outside the component whenever any filter changes
    const queryString = createQueryString();
    console.log("Updated Query String:", queryString);
    setFilter(queryString);
  }, [classId, type, rarity, manaCost, setFilter]); // Dependency array to track state changes

  const handleClick = (e) => {
    setManaCost(e.target.value);
  };

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
          label="Class"
          filter="classes"
          objectKey="name"
          data={metaData[0]}
          setState={setClassId}
        />
        <InputTemplate
          label="Type"
          filter="types"
          objectKey="name"
          data={metaData[0]}
          setState={setType}
        />
        <InputTemplate
          label="Rarity"
          filter="rarities"
          objectKey="slug"
          data={metaData[0]}
          setState={setRarity}
        />
        <ManaCost onClick={handleClick} />
      </form>
    </div>
  );
}

export default FilterSettings;
