import { useEffect, useState } from "react";
import DriverService from "../../services/DriverService";

const AddDriver = () => {
  const [driver, setDriver] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [image, setImage] = useState(null);
  const [newDriver, setNewDriver] = useState(null);

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "age":
        setAge(e.currentTarget.value);
        break;
      case "nationality":
        setNationality(e.currentTarget.value);
        break;
      case "image":
        setImage(e.currentTarget.files[0]);
        break;
    }
  };

  const saveDriver = async (e) => {
    const newDriver = {
      name: name,
      age: age,
      nationality: nationality,
      image: image.name,
    };
    await DriverService.postDriver(newDriver, image);
  };

  return (
    <section className="shadow p-2 m-1 rounded text-center bg-light text-danger texts col-12 ">
      <h3>Join the race: </h3>
      <form className="form-group">
        <div className="form-group">
          <label>Name: </label>
          <input
            className="form-control"
            name="name"
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input
            className="form-control"
            name="age"
            onChange={handleChange}
            type="number"
          />
        </div>
        <div className="form-group">
          <label>Nationality: </label>
          <input
            className="form-control"
            name="nationality"
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="form-group">
          <label>Add photo</label>
          <input
            className="form-control"
            name="image"
            onChange={handleChange}
            type="file"
          />
        </div>
        <input
          onClick={saveDriver}
          className="button"
          type="button"
          value="Add Driver"
        />
      </form>
    </section>
  );
};

export default AddDriver;
