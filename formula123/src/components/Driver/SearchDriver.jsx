import { useEffect, useState } from "react";
import DriverItem from "./DriverItem";
import DriverService from "../../services/DriverService";

const SearchDriver = () => {
  const [id, setId] = useState("");
  const [driver, setDriver] = useState(null);
  const [searchStatus, setSearchStatus] = useState("");

  const getDriversFromService = async () => {
    try {
      const driverFromService = await DriverService.getById(id);
      console.log(driverFromService);
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

  const getDriversJSX = () => {
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
    const idInput = e.currentTarget.value;
    setId(idInput);
  };

  return (
    <section className="shadow p-2 m-1 rounded text-center bg-light text-danger texts texts">
      <h3>Search Driver by ID</h3>
      <form className="form-group">
        <label>ID:</label>

        <input className="form-control" onChange={handleChange} type="text" />
        <br />
        <input
          onClick={getDriversFromService}
          className="button"
          type="button"
          value="Search"
        ></input>
        <section>{driver != null ? getDriversJSX() : searchStatus}</section>
      </form>
    </section>
  );
};

export default SearchDriver;
