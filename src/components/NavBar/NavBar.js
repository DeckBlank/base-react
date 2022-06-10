import React from "react";
import Button from "../../uiKit/Button/Button";
import Badge from "../../uiKit/Badge/Badge";
import "./_NavBar.scss";
import DropdownAvatar from "../../uiKit/DropdownAvatar/DropdownAvatar";

const NavBar = (props) => {
  let { logo, show, onclick } = props;

  return (
    <header className={`header ${show ? "space-toggle" : null}`}>
      <div className="header-toggle" onClick={onclick}>
        <i className="fas fa-solid fa-bars"></i>
      </div>
      <div className="flex-logo-avatar-nav">
        <img className="nav-logo-img" src={logo} alt="Logo de MAB" />
        <div className="flex-avatar-nav">
          <Button bgcolor="white" txtcolor="silver" position="relative">
            <i className="fas fa-solid fa-bell"></i>
            <Badge
              bgcolor="red"
              txtcolor="white"
              position="absolute"
              top="0"
              start="100"
              translate="middle"
            >
              +99
            </Badge>
          </Button>
          <DropdownAvatar
            type="button"
            bgcolor="transparent"
            txtcolor="black"
            dropdown="toggle"
            id="idDropdown"
            data-bs-toggle="dropdown"
            direction="dropdown"
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
