import React from "react";
// COMPONENTS
import Avatar from "../../../uiKit/Atoms/Avatar/Avatar";
import Dropdown from "../../../uiKit/Molecules/Dropdown/Dropdown";
import DropdownAvatar from "../../../uiKit/Molecules/DropdownAvatar/DropdownAvatar";
import ListGroup from "../../../uiKit/Atoms/ListGroup/ListGroup";
import LinkItem from "../../../uiKit/Atoms/LinkItem/LinkItem";
// JSONS
import OptionsListGroupLink from "../../../assets/Jsons/ItemsList/listgroup-list-icon-link.json";
import Title from "../../../uiKit/Atoms/Title/Title";

const DocsDropdown = () => {
  return (
    <section>
      <Title
        title="Docs Dropdown"
        classname="p-sticky top-0 txt-black bb-title f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <h2>DROPDOWN</h2>
        <br />
        <div>
          <h3>AVATAR</h3>
          <br />
          <Avatar />
        </div>
        <br />
        <br />
        <h2>DROPDOWN AVATAR</h2>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
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

          <DropdownAvatar
            type="button"
            bgcolor="black"
            txtcolor="white"
            dropdown="toggle"
            id="idDropdown"
            data-bs-toggle="dropdown"
            direction="dropup"
            text="Usuario 2"
          >
            <ListGroup classname="dropdown-group-list">
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

          <DropdownAvatar
            type="button"
            bgcolor="red"
            txtcolor="white"
            dropdown="toggle"
            id="idDropdown"
            data-bs-toggle="dropdown"
            direction="dropend"
            text="Usuario 3"
          >
            <ListGroup classname="dropdown-group-list">
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

          <DropdownAvatar
            type="button"
            bgcolor="gray"
            txtcolor="white"
            dropdown="toggle"
            id="idDropdown"
            data-bs-toggle="dropdown"
            direction="dropstart"
            text="Usuario 4"
          >
            <ListGroup classname="dropdown-group-list">
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
        <br />
        <br />
        <h2>DROPDOWN DIRECTIONS</h2>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <Dropdown
            type="button"
            bgcolor="fuchsia"
            txtcolor="white"
            dropdown="toggle"
            id="idDropdown"
            data-bs-toggle="dropdown"
            direction="dropdown"
            text="Hacia Abajo"
          >
            <ListGroup classname="dropdown-group-list">
              {OptionsListGroupLink.map((item, index) => (
                <LinkItem
                  text={item.display_name}
                  route={item.route}
                  classname="dropdown-group-list-item"
                  key={index}
                />
              ))}
            </ListGroup>
          </Dropdown>

          <Dropdown
            type="button"
            bgcolor="yellow"
            txtcolor="white"
            dropdown="toggle"
            direction="dropup"
            id="idDropdown"
            data-bs-toggle="dropdown"
            text="Hacia Arriba"
          >
            <ListGroup classname="dropdown-group-list">
              {OptionsListGroupLink.map((item, index) => (
                <LinkItem
                  text={item.display_name}
                  route={item.route}
                  classname="dropdown-group-list-item"
                  key={index}
                />
              ))}
            </ListGroup>
          </Dropdown>

          <Dropdown
            type="button"
            bgcolor="green"
            txtcolor="white"
            dropdown="toggle"
            direction="dropend"
            id="idDropdown"
            data-bs-toggle="dropdown"
            text="Hacia derecha"
          >
            <ListGroup classname="dropdown-group-list">
              {OptionsListGroupLink.map((item, index) => (
                <LinkItem
                  text={item.display_name}
                  route={item.route}
                  classname="dropdown-group-list-item"
                  key={index}
                />
              ))}
            </ListGroup>
          </Dropdown>

          <Dropdown
            type="button"
            bgcolor="blue"
            txtcolor="white"
            dropdown="toggle"
            direction="dropstart"
            id="idDropdown"
            data-bs-toggle="dropdown"
            text="Hacia izquierda"
          >
            <ListGroup classname="dropdown-group-list">
              {OptionsListGroupLink.map((item, index) => (
                <LinkItem
                  text={item.display_name}
                  route={item.route}
                  classname="dropdown-group-list-item"
                  key={index}
                />
              ))}
            </ListGroup>
          </Dropdown>
        </div>
      </div>
    </section>
  );
};

export default DocsDropdown;
