import React, { useState } from "react";
import { Icon } from "@iconify/react";
// COMPONENTS
import LinkItem from "../../../uiKit/Atoms/LinkItem/LinkItem";
import ListGroup from "../../../uiKit/Atoms/ListGroup/ListGroup";
import Collapse from "../../../uiKit/Molecules/Collapse/Collapse";
import SideBar from "../../../uiKit/Organism/SideBar/SideBar";
import Details from "../../../uiKit/Atoms/Details/Details";
import FormFilter from "../../../uiKit/Organism/FormFilter/FormFilter";
import SwitchBtn from "../../../uiKit/Atoms/SwitchBtn/SwitchBtn";
import RadioBtn from "../../../uiKit/Atoms/RadioBtn/RadioBtn";
import SelectDropdown from "../../../uiKit/Molecules/SelectDropdown/SelectDropdown";
// JSONS
import AtomsListGroup from "../../../assets/Jsons/SidebarList/atoms-list-docs.json";
import MoleculesListGroup from "../../../assets/Jsons/SidebarList/molecules-list-docs.json";
import OrganismListGroup from "../../../assets/Jsons/SidebarList/organism-list-docs.json";
import Button from "../../../uiKit/Atoms/Button/Button";
import Title from "../../../uiKit/Atoms/Title/Title";

const DocsSidebar = () => {
  const [show, setShow] = useState(true);

  return (
    <section>
      <Title
        title="Docs Sidebar"
        classname="p-sticky top-0 txt-black bb-title f-s mb-1 pl-3 pt-1 pr-1 pb-1"
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
                  classname="uncollapse-sidebar-item bb-sidebar"
                />
              </ListGroup>

              <Collapse
                text="Atoms"
                icon="clarity:list-solid"
                iconarrowdown="eva:arrow-ios-downward-outline"
                iconarrowup="eva:arrow-ios-upward-fill"
                classname="uncollapse-sidebar-item li-items-sidebar bb-sidebar"
              >
                <ListGroup classname="collapse-sidebar">
                  {AtomsListGroup.map((item, index) => (
                    <LinkItem
                      text={item.display_name}
                      route={item.route}
                      icon={item.icon}
                      classname="collapse-sidebar-item bb-sidebar"
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
                classname="uncollapse-sidebar-item li-items-sidebar bb-sidebar"
              >
                <ListGroup classname="collapse-sidebar">
                  {MoleculesListGroup.map((item, index) => (
                    <LinkItem
                      text={item.display_name}
                      route={item.route}
                      icon={item.icon}
                      classname="collapse-sidebar-item bb-sidebar"
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
                classname="uncollapse-sidebar-item li-items-sidebar bb-sidebar"
              >
                <ListGroup classname="collapse-sidebar">
                  {OrganismListGroup.map((item, index) => (
                    <LinkItem
                      text={item.display_name}
                      route={item.route}
                      icon={item.icon}
                      classname="collapse-sidebar-item bb-sidebar"
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
                  classname="uncollapse-sidebar-item bb-sidebar "
                />
              </ListGroup>
            </SideBar>
          </div>
          <div>
            <h3>FILTER</h3>
            <br />
            <SideBar
              show={show}
              classname="sidebar-filter zi-200"
              bgcolor="bg-white"
            >
              <div className="p-sticky top-0 bg-white d-flex jc-space-between ai-center pt-1 pr-1 pl-1 zi-100">
                <div className="d-flex ai-center zi-100">
                  <Icon icon="mi:filter" className="txt-gray font-xxl" />
                  <h3 className="txt-gray"> Filtros </h3>
                </div>
                {/* <Button classname="flex-btn" bgcolor="white">
                <Icon icon="ep:close-bold" className="txt-gray font-m" />
              </Button> */}
                <Icon icon="ep:close-bold" className="txt-gray font-m" />
              </div>
              <div className="content-filter">
                <Details summary="Lista" txtcolor="gray">
                  <FormFilter>
                    <SwitchBtn
                      text="Lista de clases"
                      name="name-switch-btn"
                      classname="bb-formfilter"
                    />
                    <SwitchBtn
                      text="Lista de talleres"
                      name="name-switch-btn"
                    />
                  </FormFilter>
                </Details>
                <Details summary="Por" txtcolor="gray">
                  <FormFilter>
                    <RadioBtn
                      text="Dia"
                      classname="bb-formfilter"
                      name="name-radio-btn"
                    />
                    <RadioBtn
                      text="Semana"
                      classname="bb-formfilter"
                      name="name-radio-btn"
                    />
                    <RadioBtn
                      text="Mes"
                      type="checkbox"
                      name="name-radio-btn"
                    />
                  </FormFilter>
                </Details>
                <Details summary="Por modalidad" txtcolor="gray">
                  <FormFilter>
                    <RadioBtn
                      text="Todos"
                      classname="bb-formfilter"
                      name="name-radio-btn"
                    />
                    <RadioBtn
                      text="MAB GO"
                      classname="bb-formfilter"
                      name="name-radio-btn"
                    />
                    <RadioBtn
                      text="MAB Online"
                      classname="bb-formfilter"
                      name="name-radio-btn"
                    />
                    <RadioBtn text="MAB Sede" name="name-radio-btn" />
                  </FormFilter>
                </Details>
                <Details summary="Por tutor" txtcolor="gray">
                  <SelectDropdown selectedtext="Seleccionar tutor" />
                </Details>
                <Details summary="Por Alumno" txtcolor="gray">
                  <SelectDropdown selectedtext="Seleccionar Alumno" />
                </Details>
              </div>
            </SideBar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsSidebar;
