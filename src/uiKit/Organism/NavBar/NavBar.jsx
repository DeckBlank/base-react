import React from "react";
import "./_NavBar.scss";
import { Icon } from "@iconify/react";

import Button from "../../Atoms/Button/Button";
import Badge from "../../Atoms/Badge/Badge";
import DropdownAvatar from "../../Molecules/Dropdown/DropdownAvatar";
import ListGroup from "../../Atoms/ListGroup/ListGroup";
import LinkItem from "../../Atoms/LinkItem/LinkItem";
import OptionsListGroupLink from "../../../assets/Jsons/ItemsList/listgroup-list-icon-link.json";

const NavBar = (props) => {
  let { logo, show, onclick, classname } = props;

  return (
    <header className={`header ${classname}  ${show ? "space-toggle" : null}`}>
      <div className="header-toggle" onClick={onclick}>
        <Icon icon="charm:menu-hamburger" />
      </div>
      <div className="d-flex ai-center jc-space-between w-webkit-fill-available">
        <img className="nav-logo-img" src={logo} alt="Logo de MAB" />
        <div className="d-flex ai-center jc-center g-2 mr-1">
          <Button
            classname="d-flex ai-center jc-center mt-02"
            hoverbgcolor="yellow"
            hovertxtcolor="black"
            bgcolor="white"
            txtcolor="silver"
            position="relative"
          >
            <Icon icon="bxs:bell" className="notification-icon f-xxl" />
            <Badge
              classname="mt-03"
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
            dropdown="toggle"
            id="idDropdown"
            data-bs-toggle="dropdown"
            direction="dropdown"
            text="Usuario 1"
            classname="txt-silver br-15"
            classbtn="txt-black bg-transparent pr-2"
            iconarrow="eva:arrow-ios-downward-outline"
          >
            <ListGroup classname="dropdown-group-list zi-50">
              {OptionsListGroupLink.map((item, index) => (
                <LinkItem
                  text={item.display_name}
                  route={item.route}
                  icon={item.icon}
                  classname="dropdown-group-list-item"
                  key={index}
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
