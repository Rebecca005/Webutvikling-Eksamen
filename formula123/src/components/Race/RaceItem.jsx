//Definere hvordan siden ser ut
const RaceItem = ({ id, winnername, winnertime, grandprix, numberoflaps }) => {
  return (
    <article className="col-12 col-md-6 col-lg-4">
      <div className="row shadow p-2 m-1 rounded text-center bg-light text-danger texts">
        <p>ID: {id}</p>
        <h3>Winner: {winnername}</h3>
        <h3>Time: {winnertime}</h3>
        <p>Grand Prix: {grandprix}</p>
        <p>Number of laps: {numberoflaps}</p>
      </div>
    </article>
  );
};
export default RaceItem;
