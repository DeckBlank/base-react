import React from "react";
import Button from "../../uiKit/Button/Button";
import Badge from "../../uiKit/Badge/Badge";
import "./_NavBar.scss";
import DropdownAvatar from "../../uiKit/DropdownAvatar/DropdownAvatar";
import { GrMenu } from "react-icons/gr";
import { BsFillBellFill } from "react-icons/bs";
import ListGroup from "../../uiKit/ListGroup/ListGroup";
import Li from "../../uiKit/Li/Li";
// import images from "../../assets/constants/images";
import OptionsListGroup from "../../assets/Jsons/listgroup-list-icon.json";

const NavBar = (props) => {
  let { logo, show, onclick } = props;

  return (
    <header className={`header ${show ? "space-toggle" : null}`}>
      <div className="header-toggle" onClick={onclick}>
        <GrMenu />
      </div>
      <div className="flex-logo-avatar-nav">
        <img className="nav-logo-img" src={logo} alt="Logo de MAB" />
        <div className="flex-avatar-nav">
          <Button
            classname="btn-notification"
            hoverbgcolor="yellow"
            hovertxtcolor="black"
            bgcolor="white"
            txtcolor="silver"
            position="relative"
          >
            <BsFillBellFill className="notification-icon" />
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
          text="Usuario 1"
        >
          <ListGroup classname="dropdown-group-list">
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                route={item.route}
                icon={item.icon}
                classname="dropdown-group-list-item"
              />
            ))}
          </ListGroup>
        </DropdownAvatar>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
