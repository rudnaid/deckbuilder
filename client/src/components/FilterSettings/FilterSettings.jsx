import "./FilterSettings.css";
import { useEffect, useState } from "react";
import InputTemplate from "./InputTemplate";
import ManaCost from "./ManaCost";

function FilterSettings(updateData) {
  const [meta, setMeta] = useState([]);
  const [classId, setClassId] = useState(null);
  const [type, setType] = useState(null);
  const [rarity, setRarity] = useState(null);
  const [manacost, setManaCost] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] =useState(false)
  useEffect(() => {
    const fetchMeta = async () => {
    setLoading(true)
      try {
        const data = await fetch("/api/meta");
        const result = await data.json();
        console.log("success");
        setMeta(result);
      } catch (error) {
        console.log(error);
        setError(error)
      } finally {
        setLoading(false)
      }
    };
    fetchMeta();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateData(createQueryString());
  };
  if (loading) {
    return (<div>{loading}</div>)
  }
  if (error) {
    return (<div>{`Error occured: ${error}`}</div>)
  }

  return (
    <div className="filter-settings">
      FilterSettings
      <form onSubmit={handleSubmit}>
        <InputTemplate
          label="Class"
          filter="classes"
          key="name"
          data={meta}
          setState={setClassId}
        />
        <InputTemplate
          label="Type"
          filter="types"
          key="name"
          data={meta}
          setState={setType}
        />
        <InputTemplate
          label="Rarity"
          filter="rarities"
          key="slug"
          data={meta}
          setState={setRarity}
        />
        <ManaCost label="Mana Cost" setState={setManaCost}></ManaCost>
      </form>
    </div>
  );
}

export default FilterSettings;
