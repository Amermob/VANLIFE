import { useState } from "react";
import { arrOfVans } from "./server";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState(arrOfVans);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeSearch = searchParams.get("type");

  const displayVans = searchParams.get("type")
    ? vans.filter((van) => van.type === typeSearch)
    : vans;

  const vansElement = displayVans.map((van) => {
    return (
      <Link to={`/vans/${van.id}`}>
        <section key={van.id}>
          <img src={van.imageUrl} alt={van.type} />
          <div>
            <h3>{van.name}</h3>
            <p>
              {van.price}
              <span>/day</span>
            </p>
          </div>
          <button className={van.type}>{van.type}</button>
        </section>
      </Link>
    );
  });
  return (
    <section className="vans">
      <h2>Explore our van options</h2>
      <div className="filter">
        <Link to={`?type=simple`}>Simple</Link>
        <Link to={`?type=luxury`}>Luxury</Link>
        <Link to={`?type=rugged`}>Rugged</Link>
        <Link to=".">clear filter</Link>
      </div>
      <div className="van-box">{vansElement}</div>
    </section>
  );
}
