import axios from "axios";

const RaceService = (() => {
  const raceController = "http://localhost:5186/api/races";

  const getAll = async () => {
    const result = await axios.get(raceController);
    console.log(result);
    return result.data;
  };
  return {
    getAll,
  };
})();
