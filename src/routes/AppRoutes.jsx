import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Expertise from "../pages/Expertise";
import GlobalPage from "../pages/GlobalPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About standalone/>} />
      <Route path="/expertise" element={<Expertise/>} />
      <Route path="/global-presence" element={<GlobalPage />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      
    </Routes>
  );
}
