import RaceService from "../../services/DriverService";
import { useEffect, useState } from "react";
import RaceItem from "./RaceItem";

const RaceList = () => {
  const [race, setRaces] = useState([{ winnername: "Fri Palestina" }]);

  useEffect(() => {
    getRacesFromService();
  }, []);

  const getRacesFromService = async () => {
    const racesFromService = await RaceService.getAll();
    setRaces(racesFromService);
  };

  const getRacesJSX = () => {
    const racesJSX = race.map((race, i) => (
      <RaceItem
        key={i}
        id={race.id}
        winnername={race.winnername}
        winnertime={race.winnertime}
        grandprix={race.grandprix}
        numberoflaps={race.numberoflaps}
      ></RaceItem>
    ));
    return racesJSX;
  };
  return (
    <section>
      <div className="p-3 rounded h-100 row text-center text-light texts">
        <h3>Races 2023</h3>
        <p>Number of Races: {race.length}</p>
        {getRacesJSX()}
      </div>
    </section>
  );
};

export default RaceList;
