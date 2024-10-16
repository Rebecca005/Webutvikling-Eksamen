import TeamService from "../../services/TeamService";
import { useEffect, useState } from "react";
import TeamItem from "./TeamItem";

const TeamList = () => {
  const [team, setTeams] = useState([{ manufacturer: "GoTeam" }]);

  useEffect(() => {
    getTeamsFromService();
  }, []);

  const getTeamsFromService = async () => {
    const teamsFromService = await TeamService.getAll();
    setTeams(teamsFromService);
  };

  const getTeamsJSX = () => {
    const teamsJSX = team.map((team, i) => (
      <TeamItem
        key={i}
        id={team.id}
        manufacturer={team.manufacturer}
        image={team.image}
        driver1={team.driver1}
        driver2={team.driver2}
      ></TeamItem>
    ));
    return teamsJSX;
  };
  return (
    <section>
      <div className="p-3 rounded h-100 row text-center text-light texts">
        <h3>Teams</h3>
        <p>Number of Teams: {team.length}</p>
        {getTeamsJSX()}
      </div>
    </section>
  );
};
export default TeamList;
