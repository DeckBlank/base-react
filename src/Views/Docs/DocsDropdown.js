import React from "react";
import Avatar from "../../uiKit/Avatar/Avatar";
import Dropdown from "../../uiKit/Dropdown/Dropdown";
import DropdownAvatar from "../../uiKit/DropdownAvatar/DropdownAvatar";
import ListGroup from "../../uiKit/ListGroup/ListGroup";
import OptionsListGroup from "../../assets/Jsons/listgroup-list-icon.json";
import LinkItem from "../../uiKit/LinkItem/LinkItem";
import ButtonItem from "../../uiKit/ButtonItem/ButtonItem";
import Collapse from "../../uiKit/Collapse/Collapse";
import Details from "../../uiKit/Details/Details";
import FormFilter from "../../uiKit/FormFilter/FormFilter";
import RadioBtn from "../../uiKit/RadioBtn/RadioBtn";
import SwitchBtn from "../../uiKit/SwitchBtn/SwitchBtn";
import Select from "../../uiKit/Select/Select";
import OptionsList from "../../assets/Jsons/options-list.json";
import Option from "../../uiKit/Select/Option";

const DocsDropdown = () => {
  return (
    <div>
      <h2>LINKITEM</h2>
      <br />
      <div className="grid-responsive-docs-filterform">
        <LinkItem
          text="Link for select"
          route="/"
          icon="bx:package"
          classname="collapse-selects-item"
        />
        <LinkItem
          text="Link for dropdown"
          route="/"
          icon="bx:package"
          classname="dropdown-group-list-item"
        />
        <LinkItem
          text="Link for Sidebar"
          route="/"
          icon="bx:package"
          classname="collapse-sidebar-item"
        />
        <LinkItem
          text="Link for Sidebar"
          route="/"
          icon="bx:package"
          classname="uncollapse-sidebar-item li-items-sidebar"
        />
      </div>
      <br />
      <br />
      <h2>BUTTONITEM</h2>
      <br />
      <div className="grid-responsive-docs-filterform">
        <ButtonItem
          text="Button for Select"
          icon="bx:package"
          classname="collapse-selects-item"
        />
        <ButtonItem
          text="Button for Dropdown"
          icon="bx:package"
          classname="dropdown-group-list-item"
        />
        <ButtonItem
          text="Button for Sidebar"
          icon="bx:package"
          classname="collapse-sidebar-item"
        />
        <ButtonItem
          text="Button for Sidebar"
          icon="bx:package"
          classname="uncollapse-sidebar-item li-items-sidebar"
        />
      </div>
      <br />
      <h2>LISTGROUP</h2>
      <br />
      <div className="grid-responsive-docs-filterform">
        <div>
          <h3>(S/C-SELECT)</h3>
          <br />
          <ListGroup classname="collapse-selects">
            {OptionsListGroup.map((item) => (
              <LinkItem
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
              <LinkItem
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
              <LinkItem
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
              <LinkItem
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
              <LinkItem
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
              <LinkItem
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
              <LinkItem
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
              <LinkItem
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
      <div>
        <h2>AVATAR</h2>
        <br />
        <Avatar />
      </div>
      <br />
      <br />
      <h2>COLLAPSE</h2>
      <br />
      <div className="grid-responsive-docs">
        <div className="flex-responsive-docs">
          <h3>(DETAILS / SUMMARY : FILTERS RADIO BUTTON)</h3>
          <br />
          <Details summary="Summary" txtcolor="gray">
            <FormFilter>
              <RadioBtn
                text="Radio Button 1"
                classname="border-bottom-formfilter"
                name="name-radio-btn"
              />
              <RadioBtn
                text="Radio Button 2 "
                classname="border-bottom-formfilter"
                name="name-radio-btn"
              />
              <RadioBtn
                text="Radio Button 3"
                type="checkbox"
                name="name-radio-btn"
              />
            </FormFilter>
          </Details>
        </div>
        <div className="flex-responsive-docs">
          <h3>(DETAILS / SUMMARY : FILTERS SWITCH BUTTON)</h3>
          <br />
          <Details summary="Summary" txtcolor="gray">
            <FormFilter>
              <SwitchBtn
                text="Switch Button 1"
                name="name-switch-btn"
                classname="border-bottom-formfilter"
              />
              <SwitchBtn
                text="Switch Button 2"
                name="name-switch-btn"
                classname="border-bottom-formfilter"
              />
              <SwitchBtn text="Switch Button 3" name="name-switch-btn"/>
            </FormFilter>
          </Details>
        </div>
        <div className="flex-responsive-docs">
          <h3>(DETAILS / SUMMARY : SELECTS)</h3>
          <br />
          <Details summary="Summary" txtcolor="gray">
          <Select
            size="1"
            selectedtext="Seleccionar Tutor"
            labelfor="labelfor"
          >
            {OptionsList.map((item) => (
              <Option value={item.value} optiontext={item.option} />
            ))}
          </Select>
          </Details>
        </div>
        <div className="flex-responsive-docs">
          <h3>(BUTTON / LISTGROUP)</h3>
          <br />
          <Collapse                
            text="Collapse"
          >
            <ListGroup classname="collapse-sidebar">
              {OptionsListGroup.map((item) => (
                <LinkItem
                  text={item.display_name}
                  route={item.route}
                  classname="collapse-sidebar-item border-bottom-sidebar"
                />
              ))}
            </ListGroup>
          </Collapse>
        </div>
      </div>
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
              <LinkItem
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
              <LinkItem
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
              <LinkItem
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
              <LinkItem
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
      <h2>DROPDOWN DIRECTIONS</h2>
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
              <LinkItem
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
              <LinkItem
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
              <LinkItem
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
              <LinkItem
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
