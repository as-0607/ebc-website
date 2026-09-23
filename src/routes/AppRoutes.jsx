import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Expertise from "../pages/Expertise";
import GlobalPage from "../pages/GlobalPage";
import NotFound from "../pages/NotFound";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminProjects from "../pages/admin/AdminProjects";
import AdminNews from "../pages/admin/AdminNews";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProtectedRoute from "../components/admin/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About standalone />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/global-presence" element={<GlobalPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route
        path="/admin/projects"
        element={
          <ProtectedRoute>
            <AdminProjects />
          </ProtectedRoute>
        }
      />
      <Route path="/admin/news" element={<ProtectedRoute><AdminNews /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
