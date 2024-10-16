import GuessingGame from "../components/GuessingGame";
import { DriverProvider } from "../contexts/DriverContext";

const GamePage = () => {
  return (
    <>
      <DriverProvider>
        <GuessingGame />
      </DriverProvider>
    </>
  );
};
export default GamePage;
