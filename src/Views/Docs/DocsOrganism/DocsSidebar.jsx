import React, { useState } from "react";
import { Icon } from "@iconify/react";
// COMPONENTS
import LinkItem from "../../../uiKit/Atoms/LinkItem/LinkItem";
import ListGroup from "../../../uiKit/Atoms/ListGroup/ListGroup";
import Collapse from "../../../uiKit/Molecules/Collapse/Collapse";
import SideBar from "../../../uiKit/Organism/SideBar/SideBar";
import Details from "../../../uiKit/Molecules/Details/Details";
import FormFilter from "../../../uiKit/Organism/FormFilter/FormFilter";
import SwitchBtn from "../../../uiKit/Atoms/SwitchBtn/SwitchBtn";
import RadioBtn from "../../../uiKit/Atoms/RadioBtn/RadioBtn";
import SelectDropdown from "../../../uiKit/Molecules/Select/SelectDropdown";
import Button from "../../../uiKit/Atoms/Button/Button";
import Title from "../../../uiKit/Atoms/Title/Title";
// JSONS
import AtomsListGroup from "../../../assets/Jsons/SidebarList/atoms-list-docs.json";
import MoleculesListGroup from "../../../assets/Jsons/SidebarList/molecules-list-docs.json";
import OrganismListGroup from "../../../assets/Jsons/SidebarList/organism-list-docs.json";
import OptionsListGroupBtn from "../../../assets/Jsons/ItemsList/listgroup-list-icon-btn.json";
import SidebarFilter from "../../../uiKit/Organism/SideBar/SidebarFilter";
import SidebarNotifications from "../../../uiKit/Organism/SideBar/SidebarNotifications";

const DocsSidebar = () => {
  const [show, setShow] = useState(true);

  return (
    <section>
      <Title
        title="Docs Sidebar"
        classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <h2>SIDEBAR</h2>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <div>
            <h3>HOME</h3>
            <br />
            <SideBar show={show} classname="sidebar zi-100" bgcolor="bg-gray">
              <ListGroup classname="uncollapse-sidebar li-items-sidebar">
                <LinkItem
                  text="Documentation"
                  route="/"
                  icon="ant-design:home-filled"
                  classname="uncollapse-sidebar-item bb-1-white"
                />
              </ListGroup>

              <Collapse
                text="Atoms"
                icon="clarity:list-solid"
                iconarrowdown="eva:arrow-ios-downward-outline"
                iconarrowup="eva:arrow-ios-upward-fill"
                classname="uncollapse-sidebar-item li-items-sidebar bb-1-white"
              >
                <ListGroup classname="collapse-sidebar">
                  {AtomsListGroup.map((item, index) => (
                    <LinkItem
                      text={item.display_name}
                      route={item.route}
                      icon={item.icon}
                      classname="collapse-sidebar-item bb-1-white"
                      key={index}
                    />
                  ))}
                </ListGroup>
              </Collapse>

              <Collapse
                text="Molecules"
                icon="clarity:list-solid"
                iconarrowdown="eva:arrow-ios-downward-outline"
                iconarrowup="eva:arrow-ios-upward-fill"
                classname="uncollapse-sidebar-item li-items-sidebar bb-1-white"
              >
                <ListGroup classname="collapse-sidebar">
                  {MoleculesListGroup.map((item, index) => (
                    <LinkItem
                      text={item.display_name}
                      route={item.route}
                      icon={item.icon}
                      classname="collapse-sidebar-item bb-1-white"
                      key={index}
                    />
                  ))}
                </ListGroup>
              </Collapse>

              <Collapse
                text="Organism"
                icon="clarity:list-solid"
                iconarrowdown="eva:arrow-ios-downward-outline"
                iconarrowup="eva:arrow-ios-upward-fill"
                classname="uncollapse-sidebar-item li-items-sidebar bb-1-white"
              >
                <ListGroup classname="collapse-sidebar">
                  {OrganismListGroup.map((item, index) => (
                    <LinkItem
                      text={item.display_name}
                      route={item.route}
                      icon={item.icon}
                      classname="collapse-sidebar-item bb-1-white"
                      key={index}
                    />
                  ))}
                </ListGroup>
              </Collapse>

              <ListGroup classname="uncollapse-sidebar li-items-sidebar">
                <LinkItem
                  text="Iconify"
                  route="/iconify"
                  iconarrowdown="eva:arrow-ios-downward-outline"
                  iconarrowup="ant-design:home-filled"
                  classname="uncollapse-sidebar-item bb-1-white "
                />
              </ListGroup>
            </SideBar>
          </div>
          <div>
            <h3>FILTER</h3>
            <br />
            <SideBar classname="sidebar-filter zi-200" bgcolor="bg-white">
              <SidebarFilter />
            </SideBar>
          </div>
          <div>
            <h3>NOTIFICATION</h3>
            <br />
            <SideBar classname="sidebar-notification zi-200" bgcolor="bg-white">
              <SidebarNotifications />
            </SideBar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsSidebar;
