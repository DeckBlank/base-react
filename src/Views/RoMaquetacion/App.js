import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/Sidebar/SideBar";
import LogoMab from "../../assets/images/Logo de MAB.png";

const App = () => {

  const [show, setShow] = useState(true);

  const onShow = () => {
    show==true ? setShow(false) :  setShow(true);   
  }



  return (
    <>
      <NavBar logo={LogoMab} show={show} onclick={onShow}  /> 
      <SideBar show={show} bgcolor="bg-gray" >
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
