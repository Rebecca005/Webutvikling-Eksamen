import DriverService from "../../services/DriverService";
import { useEffect, useState } from "react";
import DriverItem from "./DriverItem";

const DriverList = () => {
  const [driver, setDrivers] = useState([{ name: "Yuki Tsunoda" }]);

  useEffect(() => {
    getDriversFromService();
  }, []);

  const getDriversFromService = async () => {
    const driversFromService = await DriverService.getAll();
    setDrivers(driversFromService);
  };

  const getDriversJSX = () => {
    const driversJSX = driver.map((driver, i) => (
      <DriverItem
        key={i}
        id={driver.id}
        name={driver.name}
        age={driver.age}
        nationality={driver.nationality}
        image={driver.image}
      ></DriverItem>
    ));
    return driversJSX;
  };
  return (
    <section>
      <div className="p-3 rounded h-100 row text-center text-light texts">
        <h3>Drivers 2023</h3>
        <p>Number of Drivers: {driver.length}</p>
        {getDriversJSX()}
      </div>
    </section>
  );
};
export default DriverList;
