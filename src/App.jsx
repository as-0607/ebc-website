import AppRoutes from "./routes/AppRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
