import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import logo from "../main-component-folder/img/logo.png"
export default function Home() {
  return (
    <>
      <header>
        <Link to=".">
          <img src={logo} alt="van-logo" />
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
