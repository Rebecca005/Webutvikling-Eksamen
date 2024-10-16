//Definere hvordan siden ser ut - hente inn
const DriverItem = ({ id, age, name, nationality, image }) => {
  return (
    <article className="col-12 col-md-6 col-lg-4">
      <div className="row shadow p-2 m-1 rounded text-center bg-light text-danger texts ">
        <p>ID: {id}</p>
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>Nationality: {nationality}</p>
        <img src={`http://localhost:5186/images/drivers/${image}`} />
      </div>
    </article>
  );
};

export default DriverItem;
