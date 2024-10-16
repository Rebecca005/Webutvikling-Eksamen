import { useState, useContext } from "react";
import { DriverContext } from "../../contexts/DriverContext";

const DeleteDriver = () => {
  const { deleteDriver } = useContext(DriverContext);
  const [id, setId] = useState("");
  const [deleteStatus, setDeleteStatus] = useState("");

  const handleChange = (e) => {
    setId(e.currentTarget.value);
  };

  const handleClick = async () => {
    const result = await deleteDriver(id);
    if (result === true) {
      setDeleteStatus("Driver deleted");
    } else {
      setDeleteStatus("Driver not found");
    }
    setTimeout(() => {
      setDeleteStatus("");
    }, 5000);
  };

  return (
    <section className="shadow p-2 m-1 rounded text-center bg-light text-danger texts ">
      <h3>Delete driver </h3>
      <form className="form-group">
        <div>
          <label>ID: </label>
          <input
            className="form-control"
            name="id"
            onChange={handleChange}
            value={id}
            type="text"
          />
          <span>{deleteStatus}</span>
        </div>
        <input
          onClick={handleClick}
          className="button"
          type="button"
          value="Delete driver"
        />
      </form>
    </section>
  );
};
export default DeleteDriver;
