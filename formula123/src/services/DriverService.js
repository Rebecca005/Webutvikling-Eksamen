import axios from "axios";

const DriverService = (() => {
  const driversController = "http://localhost:5186/api/drivers";
  const imageUploadController = "http://localhost:5186/api/imageUpload";

  const getAll = async () => {
    const result = await axios.get(driversController);
    console.log(result);
    return result.data;
  };

  const getById = async (id) => {
    const result = await axios.get(`${driversController}/${id}`);
    return result.data;
  };

  const getByName = async (name) => {
    try {
      const result = await axios.get(`${driversController}/GetByName/${name}`);
      console.log(result);
      return result.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const putDriver = async (driverUpdate) => {
    try {
      const result = await axios.put(driversController, driverUpdate);
      console.log(result);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const postDriver = async (newDriver, image) => {
    try {
      const result = await axios.post(driversController, newDriver);
      console.log(result);

      const formData = new FormData();
      formData.append("formFile", image);

      const uploadResult = await axios({
        url: imageUploadController,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      formData.delete("formFile");
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDriver = async (id) => {
    try {
      const result = await axios.delete(`${driversController}/${id}`);
      console.log(result);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return {
    getAll,
    postDriver,
    getById,
    getByName,
    putDriver,
    deleteDriver,
  };
})();

export default DriverService;
