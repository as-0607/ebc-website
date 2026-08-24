import AppRoutes from "./routes/AppRoutes";
// import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <AppRoutes />
    </>
  );
}
