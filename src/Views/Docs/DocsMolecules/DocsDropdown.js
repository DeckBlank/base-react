import React from "react";
// COMPONENTS
import Avatar from "../../../uiKit/Atoms/Avatar/Avatar";
import Dropdown from "../../../uiKit/Molecules/Dropdown/Dropdown";
import DropdownAvatar from "../../../uiKit/Molecules/DropdownAvatar/DropdownAvatar";
import ListGroup from "../../../uiKit/Atoms/ListGroup/ListGroup";
import LinkItem from "../../../uiKit/Atoms/LinkItem/LinkItem";
// JSONS
import OptionsListGroupBtn from "../../../assets/Jsons/ItemsList/listgroup-list-icon-btn.json";
import OptionsListGroupLink from "../../../assets/Jsons/ItemsList/listgroup-list-icon-link.json";
import Title from "../../../uiKit/Atoms/Title/Title";
import ButtonItem from "../../../uiKit/Atoms/ButtonItem/ButtonItem";

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
        <br />
        <h3>DROPDOWN DIRECTIONS WITHOUT ARROW</h3>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <Dropdown
            type="button"
            dropdown="toggle"
            id="idDropdown"
            data-bs-toggle="dropdown"
            direction="dropdown"
            text="Hacia Abajo"
            classbtn="txt-white bg-silver"
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
            dropdown="toggle"
            direction="dropup"
            id="idDropdown"
            data-bs-toggle="dropdown"
            text="Hacia Arriba"
            classbtn="txt-white bg-silver"
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
            dropdown="toggle"
            direction="dropend"
            id="idDropdown"
            data-bs-toggle="dropdown"
            text="Hacia derecha"
            classbtn="txt-white bg-silver"
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
            dropdown="toggle"
            direction="dropstart"
            id="idDropdown"
            data-bs-toggle="dropdown"
            text="Hacia izquierda"
            classbtn="txt-white bg-silver"
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
        </div>{" "}
        <br />
        <br />
        <h3>DROPDOWN DIRECTIONS WITH ARROW</h3>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <Dropdown
            type="button"
            dropdown="toggle"
            id="idDropdown"
            data-bs-toggle="dropdown"
            direction="dropdown"
            text="Hacia Abajo"
            classbtn="txt-white bg-silver"
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
            dropdown="toggle"
            direction="dropup"
            id="idDropdown"
            data-bs-toggle="dropdown"
            text="Hacia Arriba"
            classbtn="txt-white bg-silver"
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
            dropdown="toggle"
            direction="dropend"
            id="idDropdown"
            data-bs-toggle="dropdown"
            text="Hacia derecha"
            classbtn="txt-white bg-silver"
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
            dropdown="toggle"
            direction="dropstart"
            id="idDropdown"
            data-bs-toggle="dropdown"
            text="Hacia izquierda"
            classbtn="txt-white bg-silver"
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
        </div>{" "}
        <br />
        <br />
        <h3>AVATAR</h3>
        <br />
        <Avatar />
        <br />
        <br />
        <h3>DROPDOWN WITH AVATAR - ARROW</h3>
        <br />
        <DropdownAvatar
          type="button"
          dropdown="toggle"
          id="idDropdown"
          data-bs-toggle="dropdown"
          direction="dropdown"
          text="Usuario 1"
          classbtn="txt-white bg-silver"
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
        <br />
        <br />
        <h3>DROPDOWN WITH AVATAR + ARROW</h3>
        <br />
        <DropdownAvatar
          type="button"
          dropdown="toggle"
          id="idDropdown"
          data-bs-toggle="dropdown"
          direction="dropdown"
          text="Usuario 1"
          classbtn="txt-white bg-silver"
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
        <br />
        <br />
        <h3>DROPDOWN WITH ICON - ARROW</h3>
        <br />
        <Dropdown
          type="button"
          dropdown="toggle"
          direction="dropend"
          id="idDropdown"
          data-bs-toggle="dropdown"
          icon="entypo:dots-three-vertical"
          classbtn="txt-white bg-silver"
        >
          <ListGroup classname="dropdown-group-list">
            {OptionsListGroupBtn.map((item, index) => (
              <ButtonItem
                text={item.display_name}
                route={item.route}
                icon={item.icon}
                classname="dropdown-group-list-item"
                key={index}
              />
            ))}
          </ListGroup>
        </Dropdown>
        <br />
        <br />
        <h3>DROPDOWN WITH ICON + ARROW</h3>
        <br />
        <Dropdown
          type="button"
          dropdown="toggle"
          direction="dropend"
          id="idDropdown"
          data-bs-toggle="dropdown"
          icon="entypo:dots-three-vertical"
          classbtn="txt-white bg-silver"
        >
          <ListGroup classname="dropdown-group-list">
            {OptionsListGroupBtn.map((item, index) => (
              <ButtonItem
                text={item.display_name}
                route={item.route}
                icon={item.icon}
                classname="dropdown-group-list-item"
                key={index}
              />
            ))}
          </ListGroup>
        </Dropdown>
        <br />
        <br />
        <h3>DROPDOWN WITH TEXT - ARROW</h3>
        <br />
        <Dropdown
          type="button"
          dropdown="toggle"
          direction="dropend"
          id="idDropdown"
          data-bs-toggle="dropdown"
          icon="entypo:dots-three-vertical"
          classbtn="txt-white bg-silver"
        >
          <ListGroup classname="dropdown-group-list">
            {OptionsListGroupBtn.map((item, index) => (
              <ButtonItem
                text={item.display_name}
                route={item.route}
                icon={item.icon}
                classname="dropdown-group-list-item"
                key={index}
              />
            ))}
          </ListGroup>
        </Dropdown>
        <br />
        <br />
        <h3>DROPDOWN WITH TEXT + ARROW</h3>
        <br />
        <Dropdown
          type="button"
          dropdown="toggle"
          direction="dropend"
          id="idDropdown"
          data-bs-toggle="dropdown"
          icon="entypo:dots-three-vertical"
          classbtn="txt-white bg-silver"
        >
          <ListGroup classname="dropdown-group-list">
            {OptionsListGroupBtn.map((item, index) => (
              <ButtonItem
                text={item.display_name}
                route={item.route}
                icon={item.icon}
                classname="dropdown-group-list-item"
                key={index}
              />
            ))}
          </ListGroup>
        </Dropdown>
        <br />
        <br />
        <h3>DROPDOWN WITH ICON AND TEXT - ARROW</h3>
        <br />
        <Dropdown
          type="button"
          dropdown="toggle"
          direction="dropend"
          id="idDropdown"
          data-bs-toggle="dropdown"
          icon="entypo:dots-three-vertical"
          classbtn="txt-white bg-silver"
        >
          <ListGroup classname="dropdown-group-list">
            {OptionsListGroupBtn.map((item, index) => (
              <ButtonItem
                text={item.display_name}
                route={item.route}
                icon={item.icon}
                classname="dropdown-group-list-item"
                key={index}
              />
            ))}
          </ListGroup>
        </Dropdown>
        <br />
        <br />
        <h3>DROPDOWN WITH ICON AND TEXT + ARROW</h3>
        <br />
        <Dropdown
          type="button"
          dropdown="toggle"
          direction="dropend"
          id="idDropdown"
          data-bs-toggle="dropdown"
          icon="entypo:dots-three-vertical"
          classbtn="txt-white bg-silver"
        >
          <ListGroup classname="dropdown-group-list">
            {OptionsListGroupBtn.map((item, index) => (
              <ButtonItem
                text={item.display_name}
                route={item.route}
                icon={item.icon}
                classname="dropdown-group-list-item"
                key={index}
              />
            ))}
          </ListGroup>
        </Dropdown>
      </div>
    </section>
  );
};

export default DocsDropdown;
