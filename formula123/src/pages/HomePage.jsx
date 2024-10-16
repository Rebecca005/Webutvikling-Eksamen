import race from "../images/race.jpeg";
const HomePage = () => {
  return (
    <section className="p-3 rounded h-100 row text-center text-light">
      <article>
        <h3>Welcome to Formula 1's official Web API</h3>
        <p>
          Follow {""}
          <a
            href="http://127.0.0.1:5501/wwwroot/description.html"
            class="link text-light"
          >
            {" "}
            this link{" "}
          </a>
          to learn more about Formula 1's API.
        </p>
        <br />
        <p>
          Check out the full list of drivers, teams and races. Add new drivers,
          edit existing ones and delete them. Search for drivers by name or ID.
          And last but not least, check out the latest game from the world of
          Formula 1.
        </p>
        <img
          className="race img-fluid w-100 mx-auto d-block"
          src={race}
          alt="Racing cars"
        ></img>
      </article>
    </section>
  );
};
export default HomePage;
