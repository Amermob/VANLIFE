import { Link, Outlet, Route } from "react-router-dom";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <header>
        <Link to=".">
          <img src="logo.png" alt="van-logo" />
        </Link>
        <nav>
          <Link to="about">About</Link>
          <Link to="vans">Vans</Link>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
