import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./assets/style/style.css";

import Layout from "./assets/main-component-folder/Layout";
import Home from "./assets/main-component-folder/Home";
import About from "./assets/main-component-folder/About";
import Vans from "./assets/Vans/Vans";

import "./assets/Vans/server.js";
import VanDetails from "./assets/Vans/VanDetails.jsx";
import NotFound from "./assets/main-component-folder/NotFound.jsx";

export default function VanLife() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
