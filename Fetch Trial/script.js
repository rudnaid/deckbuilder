const getCardsByClass = async (selectedClass) => {
    const url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/%7B${selectedClass}%7D`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a5b11f9264msh81f004387ad33b8p11951cjsna9bf1a12c0de",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchInfo = async () => {
    const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/info";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a5b11f9264msh81f004387ad33b8p11951cjsna9bf1a12c0de",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };