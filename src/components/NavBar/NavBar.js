import React from "react";
import Button from "../../uiKit/Button/Button";
import Badge from "../../uiKit/Badge/Badge";
import "./_NavBar.scss";
import DropdownAvatar from "../../uiKit/DropdownAvatar/DropdownAvatar";
import { GrMenu } from "react-icons/gr";
import { BsFillBellFill } from "react-icons/bs";
// import images from "../../assets/constants/images";


const NavBar = (props) => {
  let { logo, show, onclick } = props;

  return (
    <header className={`header ${show ? "space-toggle" : null}`}>
      <div className="header-toggle" onClick={onclick}>
        <GrMenu/>
        {/* <i className="fas fa-solid fa-bars"></i> */}
      </div>
      <div className="flex-logo-avatar-nav">
        <img className="nav-logo-img" src={logo} alt="Logo de MAB" />
        <div className="flex-avatar-nav">
          <Button classname="btn-notification" hoverbgcolor="yellow" hovertxtcolor="black" bgcolor="white" txtcolor="silver" position="relative">
            <BsFillBellFill className="notification-icon"/>
            {/* <i className="fas fa-solid fa-bell "></i> */}
            {/* <img src={images.notificacion} alt="" className="notification-icon" /> */}
            {/* <i src={images.notificacion} className="notification-icon"></i> */}
            {/* <i className="notification-icon"><img src={images.notificacion} alt=""  /></i> */}
            <Badge
              classname="badge-notification"
              bgcolor="red"
              txtcolor="white"
              position="absolute"
              top="0"
              start="100"
              translate="middle"
              text="+99"
            />
          </Button>
          <DropdownAvatar
            type="button"
            bgcolor="transparent"
            txtcolor="black"
            dropdown="toggle"
            id="idDropdown"
            data-bs-toggle="dropdown"
            direction="dropdown"
            text="Karina"
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
