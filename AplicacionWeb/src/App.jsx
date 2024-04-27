import "./App.css";
import NavbarHeader from "./Components/NavbarHeader";
import { useEffect } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname === "/" && navigate("/table");
  }, []);
  return (
    <>
      <NavbarHeader />
      <main className="min-vh-100">
        <Outlet />
      </main>
    </>
  );
}

export default App;
