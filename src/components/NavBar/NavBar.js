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
        <Button bgcolor="white" txtcolor="black" position="relative"  >
          <i className="fas fa-solid fa-bell"></i>
          <Badge bgcolor="red" txtcolor="white" position='absolute' top="0" start="100" translate="middle">
            +99
          </Badge>
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
