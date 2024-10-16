//Definere hvordan siden ser ut - hente inn

const TeamItem = ({ id, manufacturer, image, driver1, driver2 }) => {
  return (
    <article className="col-12 col-md-6 col-lg-4">
      <div className="row shadow p-2 m-1 rounded text-center bg-light text-danger texts ">
        <p>{id}</p>
        <h3>{manufacturer}</h3>
        <img src={`http://localhost:5186/images/teams/${image}`} />
        <p>{driver1}</p>
        <p>{driver2}</p>
      </div>
    </article>
  );
};

export default TeamItem;
