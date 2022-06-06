import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/Sidebar/SideBar";
import "./_App.scss";

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <SideBar>
        <div>
          <Link to="/ro-maquetacion" className="nav-logo">
            <i className="fa fa-solid fa-home nav-logo-icon"></i>
            <span className="nav-logo-name">Inicio</span>
          </Link>

          <div className="nav-list">
            <Link to="/ro-maquetacion" className="nav-link active">
              <i class="fa fa-light fa-file-lines nav-link-icon"></i>
              <span className="nav-link-name">Lista</span>
            </Link>

            <Link to="/ro-maquetacion" className="nav-link">
              <i className="fas fa-solid fa-bell nav-link-icon"></i>
              <span className="nav-link-name">Reportes</span>
            </Link>
          </div>
        </div>

        <Link to="/ro-maquetacion" className="nav-link">
          <i className="fas fa-solid fa-bell nav-link-icon"></i>
          <span className="nav-link-name">Cerrar Sesión</span>
        </Link>
      </SideBar>
    </>
  );
};

export default App;
