import React from "react";
import Button from "../../uiKit/Button/Button";
import Badge from "../../uiKit/Badge/Badge";

import "./_NavBar.scss";

const NavBar = (props) => {
  let { logo, show, onclick } = props;

  return (
    <header className={`header ${show ? "space-toggle" : null}`}>
      <div className="header-toggle" onClick={onclick}>
        <i className="fas fa-solid fa-bars"></i>
      </div>

      <img className="nav-logo-img" src={logo} alt="Logo de MAB" />

      <div>
        <Button className="btn btn-yellow position-relative">
          <i className="fas fa-solid fa-bell"></i>
          <Badge className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-red txt-white">
            99
          </Badge>
        </Button>
        <button>
          <i className="fas fa-solid fa-bell"></i>
          Karina
        </button>
      </div>
    </header>
  );
};

export default NavBar;
