import { createContext, useState, useEffect } from "react";
import DriverService from "../services/DriverService";

export const DriverContext = createContext(null);

export const DriverProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getDriversFromService();
    }, 1000);
  }, []);

  const getDriversFromService = async () => {
    const driversFromService = await DriverService.getAll();
    setDrivers(driversFromService);
  };

  const getById = async (id) => {
    const driverUpdate = await DriverService.getById(id);
    return driverUpdate;
  };
  const getByName = async (name) => {
    const driverUpdate = await DriverService.getByName(name);
    return driverUpdate;
  };
  const editDriver = async (driverUpdate) => {
    await DriverService.putDriver(driverUpdate);
    getDriversFromService(); // Oppdaterer listen
  };

  const deleteDriver = async (id) => {
    const result = await DriverService.deleteDriver(id);
    return result;
  };

  return (
    <DriverContext.Provider
      value={{ drivers, getById, getByName, editDriver, deleteDriver }}
    >
      {children}
    </DriverContext.Provider>
  );
};
