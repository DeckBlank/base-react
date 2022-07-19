import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// COMPONENTS
import Avatar from "../../../uiKit/Atoms/Avatar/Avatar";
import Dropdown from "../../../uiKit/Molecules/Dropdown/Dropdown";
import DropdownAvatar from "../../../uiKit/Molecules/Dropdown/DropdownAvatar";
import ListGroup from "../../../uiKit/Atoms/ListGroup/ListGroup";
import LinkItem from "../../../uiKit/Atoms/LinkItem/LinkItem";
import ButtonItem from "../../../uiKit/Atoms/ButtonItem/ButtonItem";
import Title from "../../../uiKit/Atoms/Title/Title";
import Dropdown2 from "../../../uiKit/Molecules/Dropdown/Dropdown2";
// JSONS
import OptionsListGroupBtn from "../../../assets/Jsons/ItemsList/listgroup-list-icon-btn.json";
import OptionsListGroupLink from "../../../assets/Jsons/ItemsList/listgroup-list-icon-link.json";
import notifications from "../../../assets/Jsons/ItemsList/notification.json";

const DocsDropdown = () => {
  
  const renderNotificationItem = (item, index) => (
    <div className="d-flex ai-center g-05 p-05" key={index}>
        <Icon className="txt-black f-xl" icon={item.icon} />
      <span className="f-s" >{item.content}</span>
    </div>
  );

  return (
    <section>
      <Title
        title="Docs Dropdown"
        classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <h2>DROPDOWN</h2>
        <br />
        <br />
        <h3>DROPDOWN DIRECTIONS WITH FOOTER</h3>
        <br />
        <div>
          <Dropdown2
            classname="btn-padding"
            icon="bxs:bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">Ver Todas</Link>}
          />
        </div>
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
            classname="btn-padding bg-red txt-white br-15"
            classbtn="txt-white bg-transparent"
          >
            <ListGroup classname="dropdown-group-list zi-50">
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
            classname="btn-padding bg-blue txt-white br-15"
            classbtn="txt-white bg-transparent "
          >
            <ListGroup classname="dropdown-group-list zi-50">
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
            classname="btn-padding bg-green txt-white br-15"
            classbtn="txt-white bg-transparent "
          >
            <ListGroup classname="dropdown-group-list zi-50">
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
            classname="btn-padding bg-orange txt-white br-15"
            classbtn="txt-white bg-transparent "
          >
            <ListGroup classname="dropdown-group-list zi-50">
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
            classname="btn-padding bg-red txt-white br-15"
            classbtn="txt-white bg-transparent pr-2"
            iconarrow="eva:arrow-ios-downward-outline"
          >
            <ListGroup classname="dropdown-group-list zi-50">
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
            classname="btn-padding bg-blue txt-white br-15"
            classbtn="txt-white bg-transparent pr-2"
            iconarrow="eva:arrow-ios-upward-fill"
          >
            <ListGroup classname="dropdown-group-list zi-50">
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
            classname="btn-padding bg-orange txt-white br-15"
            classbtn="txt-white bg-transparent pr-2"
            iconarrow="eva:arrow-ios-forward-outline"
          >
            <ListGroup classname="dropdown-group-list zi-50">
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
            classname="btn-padding bg-green txt-white br-15"
            classbtn="txt-white bg-transparent pr-2"
            iconarrow="eva:arrow-ios-back-outline"
          >
            <ListGroup classname="dropdown-group-list zi-50">
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
          classname="btn-padding txt-white br-15"
          classbtn="txt-black bg-transparent "
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
          classname="btn-padding txt-white bg-gray br-15"
          classbtn="txt-white bg-transparent pr-2"
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
          classname="btn-padding bg-white br-15"
          classbtn="txt-black bg-transparent"
        >
          <ListGroup classname="dropdown-group-list zi-50">
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
          icon="fluent:calculator-20-filled"
          iconarrow="eva:arrow-ios-forward-outline"
          classname="btn-padding txt-white bg-silver br-15"
          classbtn="txt-white bg-transparent pr-2"
        >
          <ListGroup classname="dropdown-group-list zi-50">
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
          text="Texto"
          classname="btn-padding bg-yellow txt-white br-15"
          classbtn="txt-black bg-transparent "
        >
          <ListGroup classname="dropdown-group-list zi-50">
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
          text="Texto"
          classname="btn-padding txt-silver br-15"
          classbtn="txt-black bg-transparent pr-2"
          iconarrow="eva:arrow-ios-forward-outline"
        >
          <ListGroup classname="dropdown-group-list zi-50">
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
          icon="fluent:calculator-20-filled"
          classname="btn-padding txt-silver br-15"
          classbtn="txt-black bg-transparent"
          text="Texto"
        >
          <ListGroup classname="dropdown-group-list zi-50">
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
          icon="fluent:calculator-20-filled"
          iconarrow="eva:arrow-ios-forward-outline"
          text="Texto"
          classname="btn-padding bg-yellow txt-white br-15"
          classbtn="txt-black bg-transparent pr-2"
        >
          <ListGroup classname="dropdown-group-list zi-50">
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
