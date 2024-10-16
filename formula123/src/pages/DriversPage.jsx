import DriverList from "../components/Driver/DriverList";

import { DriverProvider } from "../contexts/DriverContext";

const DriversPage = () => {
  return (
    <>
      <DriverProvider>
        <DriverList />
      </DriverProvider>
    </>
  );
};

export default DriversPage;
