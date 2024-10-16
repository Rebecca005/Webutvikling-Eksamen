import { useState, useEffect } from "react";
import DriverItem from "./DriverItem";
import DriverService from "../../services/DriverService";

const SearchDriverName = () => {
  const [name, setName] = useState("");
  const [driver, setDriver] = useState(null);
  const [searchStatus, setSearchStatus] = useState("");

  const getDriverFromService = async () => {
    try {
      const driverFromService = await DriverService.getByName(name);
      if (!driverFromService) {
        setSearchStatus("Driver not found. Try again.");
      } else {
        setDriver(driverFromService);
        setSearchStatus("");
      }
    } catch (error) {
      console.error(error);
      setSearchStatus("Driver not found. Try again.");
    }
  };

  const getDriverJSX = () => {
    return (
      <DriverItem
        id={driver.id}
        name={driver.name}
        age={driver.age}
        nationality={driver.nationality}
        image={driver.image}
      ></DriverItem>
    );
  };
  const handleChange = (e) => {
    const nameInput = e.currentTarget.value;
    setName(nameInput);
  };
  return (
    <section className="shadow p-2 m-1 rounded text-center bg-light text-danger texts texts">
      <h3>Search Driver by Name</h3>
      <form className="form-group">
        <label>Name</label>
        <input className="form-control" onChange={handleChange} type="text" />
        <br />
        <input
          onClick={getDriverFromService}
          className="button"
          type="button"
          value="Search"
        ></input>
        <section>{driver != null ? getDriverJSX() : searchStatus}</section>
      </form>
    </section>
  );
};
export default SearchDriverName;
