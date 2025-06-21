import { Link, useParams, useNavigate } from "react-router-dom";
import { arrOfVans } from "./server";

export default function VanDetails() {
  const parsId = useParams();
  const navigate = useNavigate();

  const filterdEl = arrOfVans.filter((id) => {
    return id.id === parsId.id;
  });

  const vanEl = (
    <section className="single-van">
      <button onClick={() => navigate(-1)}>Back to all vans</button>
      <section className="top-section" key={filterdEl[0].id}>
        <div>
          <img src={filterdEl[0].imageUrl} alt={filterdEl[0].type} />

          <button className={filterdEl[0].type}>{filterdEl[0].type}</button>
        </div>

        <div className="text-section">
          <h3>{filterdEl[0].name}</h3>
          <p>
            ${filterdEl[0].price}
            <span>/day</span>
          </p>
          <p>{filterdEl[0].description}</p>
        </div>
      </section>
    </section>
  );
  return <h2>{vanEl}</h2>;
}
