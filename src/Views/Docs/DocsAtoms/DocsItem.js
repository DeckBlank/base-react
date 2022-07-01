import React from "react";
// COMPONENTS
import ListGroup from "../../../uiKit/Atoms/ListGroup/ListGroup";
import LinkItem from "../../../uiKit/Atoms/LinkItem/LinkItem";
import ButtonItem from "../../../uiKit/Atoms/ButtonItem/ButtonItem";
// JSONS
import OptionsListGroupLink from "../../../assets/Jsons/ItemsList/listgroup-list-icon-link.json";
import Title from "../../../uiKit/Atoms/Title/Title";

const DocsItem = () => {
  return (
    <section>
      <Title title="Docs Item" classname="p-sticky top-0 txt-black bb-title f-s mb-1 pl-3 pt-1 pr-1 pb-1" />
      <div className="ph-3"> 
      <h2>LINKITEM</h2>
      <br />
      <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
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
      <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
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
      <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
        <div>
          <h3>(S/C-SELECT)</h3>
          <br />
          <ListGroup classname="collapse-selects">
            {OptionsListGroupLink.map((item, index) => (
              <LinkItem
                text={item.display_name}
                route={item.route}
                classname="collapse-selects-item bt-formfilter"
                key={index}
              />
            ))}
          </ListGroup>
        </div>
        <div>
          <h3>(DROPDOWN)</h3>
          <br />
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
        </div>
        <div>
          <h3>(COLLAPSE-SIDEBAR)</h3>
          <br />
          <ListGroup classname="collapse-sidebar">
            {OptionsListGroupLink.map((item, index) => (
              <LinkItem
                text={item.display_name}
                route={item.route}
                classname="collapse-sidebar-item bb-sidebar"
                key={index}
              />
            ))}
          </ListGroup>
        </div>
        <div>
          <h3>(UNCOLLAPSE-SIDEBAR)</h3>
          <br />
          <ListGroup classname="uncollapse-sidebar li-items-sidebar">
            {OptionsListGroupLink.map((item, index) => (
              <LinkItem
                text={item.display_name}
                route={item.route}
                classname="uncollapse-sidebar-item bb-sidebar"
                key={index}
              />
            ))}
          </ListGroup>
        </div>
      </div>
      <br />
      <br />
      <h2>LISTGROUP WITH ICON</h2>
      <br />
      <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
        <div>
          <h3>(D/C-SELECT)</h3>
          <br />
          <ListGroup classname="collapse-selects">
            {OptionsListGroupLink.map((item, index) => (
              <LinkItem
                text={item.display_name}
                icon={item.icon}
                route={item.route}
                classname="collapse-selects-item bt-formfilter"
                key={index}
              />
            ))}
          </ListGroup>
        </div>
        <div>
          <h3>(DROPDOWN-BUTTON)</h3>
          <br />
          <ListGroup classname="dropdown-group-list">
            {OptionsListGroupLink.map((item, index) => (
              <LinkItem
                text={item.display_name}
                icon={item.icon}
                route={item.route}
                classname="dropdown-group-list-item"
                key={index}
              />
            ))}
          </ListGroup>
        </div>
        <div>
          <h3>(COLLAPSE-SIDEBAR)</h3>
          <br />
          <ListGroup classname="collapse-sidebar">
            {OptionsListGroupLink.map((item, index) => (
              <LinkItem
                text={item.display_name}
                route={item.route}
                icon={item.icon}
                classname="collapse-sidebar-item bb-sidebar"
                key={index}
              />
            ))}
          </ListGroup>
        </div>
        <div>
          <h3>(UNCOLLAPSE-SIDEBAR)</h3>
          <br />
          <ListGroup classname="uncollapse-sidebar li-items-sidebar">
            {OptionsListGroupLink.map((item, index) => (
              <LinkItem
                text={item.display_name}
                route={item.route}
                icon={item.icon}
                classname="uncollapse-sidebar-item bb-sidebar "
                key={index}
              />
            ))}
          </ListGroup>
        </div>
      </div></div> 
    </section>
  );
};

export default DocsItem;
