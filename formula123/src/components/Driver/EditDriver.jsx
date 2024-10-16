import { useContext, useState } from "react";
import { DriverContext } from "../../contexts/DriverContext";

const EditDriver = () => {
  const { getById, editDriver } = useContext(DriverContext);
  const [id, setId] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [driverUpdate, setDriverUpdate] = useState({
    name: "...",
    age: "...",
    nationality: "...",
  });

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(e.currentTarget.value);
        break;
      case "name":
        setDriverUpdate({ ...driverUpdate, name: e.currentTarget.value });
        console.log("Går inn i name/driver?");
        break;
      case "age":
        setDriverUpdate({ ...driverUpdate, age: e.currentTarget.value });
        break;
      case "nationality":
        setDriverUpdate({
          ...driverUpdate,
          nationality: e.currentTarget.value,
        });
    }
  };

  const getByIdFromContext = async () => {
    try {
      const driverFromContext = await getById(id);
      console.log(driverFromContext);
      if (driverFromContext) {
        setDriverUpdate(driverFromContext);
        setSearchStatus("");
      } else {
        setSearchStatus("Driver not found. Try again.");
      }
    } catch (error) {
      console.error(error);
      setSearchStatus("Driver not found. Try again.");
    }
  };

  //
  const getByNameFromContext = async () => {
    const driverFromContext = await getByName(name);
    setDriverUpdate(driverFromContext);
    console.log(driverFromContext);
  };

  const saveChanges = () => {
    editDriver(driverUpdate);
  };

  return (
    <section className="shadow p-2 m-1 rounded text-center bg-light text-danger texts ">
      <h3>Edit driver </h3>
      <form className="form-group">
        <div>
          <label>ID:</label>
          <input
            className="form-control"
            onChange={handleChange}
            name="id"
            type="number"
            value={id}
          />
          <br />

          <input
            onClick={getByIdFromContext}
            className="button"
            type="button"
            value="Get by ID"
          />
          <section>{searchStatus}</section>
        </div>
        <div className="form-group">
          <label>Name: </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="name"
            type="text"
            value={driverUpdate.name}
          />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="age"
            type="text"
            value={driverUpdate.age}
          />
        </div>
        <label>Nationality: </label>
        <input
          className="form-control"
          onChange={handleChange}
          name="nationality"
          type="text"
          value={driverUpdate.nationality}
        />
        <div>
          <label>Add photo</label>
          <input
            className="form-control"
            name="image"
            onChange={handleChange}
            type="file"
          />
        </div>
        <input
          onClick={saveChanges}
          className="button"
          type="button"
          value="Save driver"
        />
      </form>
    </section>
  );
};
export default EditDriver;
