import React, { useState } from "react";
import LogoMab from "../../../../assets/images/Logo de MAB.png";
import "./_NavBar.scss";

const NavBar = (props) => {

  let {
    mostrar
  } = props

  const [show, setShow] = useState(props.mostrar);
  return (
    <header className={`header ${show ? "space-toggle" : null}`}>
      <div className="header-toggle" onClick={() => setShow(!show)}>
        <i className="fas fa-solid fa-bars"></i>
      </div>

      <img className="nav-logo-img" src={LogoMab} alt="Logo de MAB" />

      <div>
        <button>
          <i className="fas fa-solid fa-bell"></i>
        </button>
        <button>
          <i className="fas fa-solid fa-bell"></i>
          Karina
        </button>
      </div>
    </header>
  );
};

export default NavBar;
