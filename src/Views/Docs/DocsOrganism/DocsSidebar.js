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

const DocsSidebar = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>SIDEBAR</h2>
      <br />
      <div className="grid-responsive-docs">
        <div>
          <h3>HOME</h3>
          <br />
          <SideBar show={show} classname="sidebar" bgcolor="bg-gray">
            <ListGroup classname="uncollapse-sidebar li-items-sidebar">
              <LinkItem
                text="Documentation"
                route="/"
                icon="ant-design:home-filled"
                classname="uncollapse-sidebar-item border-bottom-sidebar"
              />
            </ListGroup>

            <Collapse
              text="Atoms"
              icon="clarity:list-solid"
              classname="uncollapse-sidebar-item li-items-sidebar border-bottom-sidebar"
            >
              <ListGroup classname="collapse-sidebar">
                {AtomsListGroup.map((item, index) => (
                  <LinkItem
                    text={item.display_name}
                    route={item.route}
                    classname="collapse-sidebar-item border-bottom-sidebar"
                    key={index}
                  />
                ))}
              </ListGroup>
            </Collapse>

            <Collapse
              text="Molecules"
              icon="clarity:list-solid"
              classname="uncollapse-sidebar-item li-items-sidebar border-bottom-sidebar"
            >
              <ListGroup classname="collapse-sidebar">
                {MoleculesListGroup.map((item, index) => (
                  <LinkItem
                    text={item.display_name}
                    route={item.route}
                    classname="collapse-sidebar-item border-bottom-sidebar"
                    key={index}
                  />
                ))}
              </ListGroup>
            </Collapse>

            <Collapse
              text="Organism"
              icon="clarity:list-solid"
              classname="uncollapse-sidebar-item li-items-sidebar border-bottom-sidebar"
            >
              <ListGroup classname="collapse-sidebar">
                {OrganismListGroup.map((item, index) => (
                  <LinkItem
                    text={item.display_name}
                    route={item.route}
                    classname="collapse-sidebar-item border-bottom-sidebar"
                    key={index}
                  />
                ))}
              </ListGroup>
            </Collapse>

            <ListGroup classname="uncollapse-sidebar li-items-sidebar">
              <LinkItem
                text="Iconify"
                route="/iconify"
                icon="akar-icons:face-very-happy"
                classname="uncollapse-sidebar-item border-bottom-sidebar "
              />
            </ListGroup>
          </SideBar>
        </div>
        <div>
          <h3>FILTER</h3>
          <br />
          <SideBar show={show} classname="sidebar-filter" bgcolor="bg-white">
            <div className="position-sticky top-0 bg-white flex-filternav">
              <div className="flex-filtertitle">
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
                    classname="border-bottom-formfilter"
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
                    classname="border-bottom-formfilter"
                    name="name-radio-btn"
                  />
                  <RadioBtn
                    text="Semana"
                    classname="border-bottom-formfilter"
                    name="name-radio-btn"
                  />
                  <RadioBtn text="Mes" type="checkbox" name="name-radio-btn" />
                </FormFilter>
              </Details>
              <Details summary="Por modalidad" txtcolor="gray">
                <FormFilter>
                  <RadioBtn
                    text="Todos"
                    classname="border-bottom-formfilter"
                    name="name-radio-btn"
                  />
                  <RadioBtn
                    text="MAB GO"
                    classname="border-bottom-formfilter"
                    name="name-radio-btn"
                  />
                  <RadioBtn
                    text="MAB Online"
                    classname="border-bottom-formfilter"
                    name="name-radio-btn"
                  />
                  <RadioBtn
                    text="MAB Sede"
                    name="name-radio-btn"
                  />
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
  );
};

export default DocsSidebar;
