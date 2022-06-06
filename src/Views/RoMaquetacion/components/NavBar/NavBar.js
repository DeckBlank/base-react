import React from "react";
import "./_NavBar.scss";

const NavBar = (props) => {

  let{
    logo, show, onclick
  }=props

  return (
    <header className={`header ${show ? "space-toggle" : null}`}>
      <div className="header-toggle" onClick={onclick}>
        <i className="fas fa-solid fa-bars"></i>
      </div>

      <img className="nav-logo-img" src={logo} alt="Logo de MAB" />

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
