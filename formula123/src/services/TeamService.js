import axios from "axios";

const TeamService = (() => {
  const teamController = "http://localhost:5186/api/teams";

  const getAll = async () => {
    const result = await axios.get(teamController);
    console.log(result);
    return result.data;
  };
  return {
    getAll,
  };
})();

export default TeamService;
