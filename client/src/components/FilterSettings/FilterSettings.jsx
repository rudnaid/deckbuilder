import "./FilterSettings.css";
import { useState } from "react";
import InputTemplate from "./InputTemplate";
import ManaCost from "./ManaCost";
import useFetchData from "../../hooks/useFetchData";

function FilterSettings({updateData}) {
  const [classId, setClassId] = useState(null);
  const [type, setType] = useState(null);
  const [rarity, setRarity] = useState(null);
  const [manacost, setManaCost] = useState(null);
  const { data: metaData, loading, error } = useFetchData('/api/meta');

  function handleClick(e) {
    setManaCost(e.target.value);
  }

  const createQueryString = () => {
    let result = [];
    if (classId !== "all") {
      result.push(`classId=${classId}`);
    }
    if (type !== "all") {
      result.push(`type=${type}`);
    }
    if (rarity !== "all") {
      result.push(`rarity=${rarity}`);
    }
    if (manacost !== "all") {
      result.push(`manaCost=${manacost}`);
    }

    return result.length > 0 ? result.join("&") : "";
  };

  const handleChange = async (e) => {
  const handleChange = async (e) => {
    e.preventDefault();
    console.log(createQueryString());
    updateData(createQueryString());
  };
  if (loading) {
    return <div>{loading}</div>;
  }
  if (error) {
    return <div>{`Error occured: ${error}`}</div>;
  }

  return (
    <div className="filter-settings">
      FilterSettings
      <form onChange={handleChange}>
      <form onChange={handleChange}>
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
        <ManaCost onClick={handleClick}></ManaCost>
      </form>
    </div>
  );
}

export default FilterSettings;
