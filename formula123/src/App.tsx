import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DriversPage from "./pages/DriversPage";
import HomePage from "./pages/HomePage";
import F1white from "./images/F1white.png";
import TeamsPage from "./pages/TeamsPage";
import RacesPage from "./pages/RacesPage";
import { DriverProvider } from "./contexts/DriverContext";
import EditPage from "./pages/EditPage";
import GamePage from "./pages/GamePage";
import "./indexnew.css";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-danger">
        <nav className="navbar navbar-expand ">
          <img
            className="img-fluid formula-logo"
            src={F1white}
            alt="F1 Logo"
          ></img>
          <section className="navbar collapse d-flex justify-content-center px-3 ">
            <p className="r p-5">
              <Link className="text-light" to="/">
                Home
              </Link>
            </p>
            <p className="ma p-5">
              <Link className="text-light" to="drivers">
                Drivers
              </Link>
            </p>
            <p className="p-5">
              <Link className="text-light" to="teams">
                Teams
              </Link>
            </p>
            <p className="ea p-5">
              <Link className="text-light" to="races">
                Races
              </Link>
            </p>

            <p className="p-5">
              <Link className="text-light" to="edit">
                Edit Drivers
              </Link>
            </p>
            <p className="p-5">
              <Link className="text-light" to="game">
                Game
              </Link>
            </p>
          </section>
        </nav>
      </header>
      <main className="container">
        <DriverProvider>
          <Routes>
            <Route path="game" element={<GamePage />}></Route>
            <Route path="edit" element={<EditPage />}></Route>
            <Route path="races" element={<RacesPage />}></Route>
            <Route path="teams" element={<TeamsPage />}></Route>
            <Route path="drivers" element={<DriversPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </DriverProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;
/*<nav className="navbar navbar-expand navbar-dark bg-dark mb-5">
  <Link className="navbar-brand text-danger px-3" to="/">
    <img className="img-fluid w-100" src={logo}></img>
    Formel-1
  </Link>
  <div className="navbar-collapse collapse d-flex justify-content-end px-3">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Hjem
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="drivers">
          Sjåfører
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="races">
          Billøp
        </Link>
      </li>
    </ul>
  </div>
</nav>;*/
