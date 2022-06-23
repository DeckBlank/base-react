import React from "react";
import Avatar from "../../uiKit/Avatar/Avatar";
import Dropdown from "../../uiKit/Dropdown/Dropdown";
import DropdownAvatar from "../../uiKit/DropdownAvatar/DropdownAvatar";
import ListGroup from "../../uiKit/ListGroup/ListGroup";
import OptionsListGroup from "../../assets/Jsons/listgroup-list-icon.json";
import Li from "../../uiKit/Li/Li";
const DocsDropdown = () => {
  return (
    <div>
      <h2>AVATAR</h2>
      <br />
      <Avatar /> <br />
      <br />
      <h2>LISTGROUP</h2>
      <br />
      <div className="grid-responsive-docs-filterform">
        <div>
          <h3>(S/C-SELECT)</h3>
          <br />
          <ListGroup classname="collapse-selects">
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                route={item.route}
                classname="collapse-selects-item border-top-formfilter"
              />
            ))}
          </ListGroup>
        </div>
        <div>
          <h3>(DROPDOWN)</h3>
          <br />
          <ListGroup classname="dropdown-group-list">
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                route={item.route}
                classname="dropdown-group-list-item"
              />
            ))}
          </ListGroup>
        </div>
        <div>
          <h3>(COLLAPSE-SIDEBAR)</h3>
          <br />
          <ListGroup classname="collapse-sidebar">
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                route={item.route}
                classname="collapse-sidebar-item border-bottom-sidebar"
              />
            ))}
          </ListGroup>
        </div>
        <div>
          <h3>(UNCOLLAPSE-SIDEBAR)</h3>
          <br />
          <ListGroup classname="uncollapse-sidebar">
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                route={item.route}
                classname="uncollapse-sidebar-item border-bottom-sidebar"
              />
            ))}
          </ListGroup>
        </div>
      </div>
      <br />
      <br />
      <h2>LISTGROUP WITH ICON</h2>
      <br />
      <div className="grid-responsive-docs-filterform">
        <div>
          <h3>(D/C-SELECT)</h3>
          <br />
          <ListGroup classname="collapse-selects">
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                icon={item.icon}
                route={item.route}
                classname="collapse-selects-item border-top-formfilter"
              />
            ))}
          </ListGroup>
        </div>
        <div>
          <h3>(DROPDOWN-BUTTON)</h3>
          <br />
          <ListGroup classname="dropdown-group-list">
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                icon={item.icon}
                route={item.route}
                classname="dropdown-group-list-item"
              />
            ))}
          </ListGroup>
        </div>
        <div>
          <h3>(COLLAPSE-SIDEBAR)</h3>
          <br />
          <ListGroup classname="collapse-sidebar">
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                route={item.route}
                icon={item.icon}
                classname="collapse-sidebar-item border-bottom-sidebar"
              />
            ))}
          </ListGroup>
        </div>
        <div>
          <h3>(UNCOLLAPSE-SIDEBAR)</h3>
          <br />
          <ListGroup classname="uncollapse-sidebar li-items-sidebar">
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                route={item.route}
                icon={item.icon}
                classname="uncollapse-sidebar-item border-bottom-sidebar "
              />
            ))}
          </ListGroup>
        </div>
      </div>
      <br />
      <br />
      <h2>DROPDOWN AVATAR</h2>
      <br />
      <div className="grid-responsive-docs">
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
      <br />
      <br />
      <h2>DROPDOWN SIMPLE</h2>
      <br />
      <div className="grid-responsive-docs">
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
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                route={item.route}
                classname="dropdown-group-list-item"
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
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                route={item.route}
                classname="dropdown-group-list-item"
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
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                route={item.route}
                classname="dropdown-group-list-item"
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
            {OptionsListGroup.map((item) => (
              <Li
                text={item.display_name}
                route={item.route}
                classname="dropdown-group-list-item"
              />
            ))}
          </ListGroup>
        </Dropdown>
      </div>
    </div>
  );
};

export default DocsDropdown;
