import AddDriver from "../components/Driver/AddDriver";
import SearchDriver from "../components/Driver/SearchDriver";
import SearchDriverName from "../components/Driver/SearchDriverName";
import DeleteDriver from "../components/Driver/DeleteDriver";
import EditDriver from "../components/Driver/EditDriver";
import { DriverProvider } from "../contexts/DriverContext";

const EditPage = () => {
  return (
    <div>
      <h1 className="text-danger"></h1>
      <DriverProvider>
        <AddDriver />
        <SearchDriver />
        <SearchDriverName />
        <EditDriver />
        <DeleteDriver />
      </DriverProvider>
    </div>
  );
};

export default EditPage;
