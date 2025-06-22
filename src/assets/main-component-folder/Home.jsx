import { Link } from "react-router-dom";
import homeImg from "../main-component-folder/img/home.png"

export default function Home() {
  return (
    <>
      <section className="home">
        <img src={homeImg} alt="homepage" />
        <div className="text-section">
          <h2>You got the travel plans, we got the travel vans.</h2>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link to="vans">Find your van</Link>
        </div>
      </section>
    </>
  );
}
