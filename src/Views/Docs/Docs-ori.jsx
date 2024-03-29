import React, { Component, Suspense, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// COMPONENTS
import NavBar from "../../uiKit/Organism/NavBar/NavBar";
import SideBar from "../../uiKit/Organism/SideBar/SideBar";
import Content from "../../components/Content/Content";
import LogoMab from "../../assets/images/Logo de MAB.png";
import useToken from "../../useToken";
import ListGroup from "../../uiKit/Atoms/ListGroup/ListGroup";
import LinkItem from "../../uiKit/Atoms/LinkItem/LinkItem";
import Collapse from "../../uiKit/Molecules/Collapse/Collapse";

// JSONS
import AtomsListGroup from "../../assets/Jsons/SidebarList/atoms-list-docs.json";
import MoleculesListGroup from "../../assets/Jsons/SidebarList/molecules-list-docs.json";
import OrganismListGroup from "../../assets/Jsons/SidebarList/organism-list-docs.json";

// LOADER
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Cargando...</div>
  </div>
);

// PAGES FOR DOCS

// DOCS ATOMS
const DocsButton = React.lazy(() => import("./DocsAtoms/DocsButton"));
const DocsInput = React.lazy(() => import("./DocsAtoms/DocsInput"));
const DocsBadge = React.lazy(() => import("./DocsAtoms/DocsBadge"));
const DocsItem = React.lazy(() => import("./DocsAtoms/DocsItem"));
const DocsIconify = React.lazy(() => import("./DocsAtoms/DocsIconify"));

// DOCS MOLECULES
const DocsCollapse = React.lazy(() => import("./DocsMolecules/DocsCollapse"));
const DocsDropdown = React.lazy(() => import("./DocsMolecules/DocsDropdown"));
const DocsSelect = React.lazy(() => import("./DocsMolecules/DocsSelect"));
const DocsTable = React.lazy(() => import("./DocsMolecules/DocsTable"));

// DOCS ORGANISM
const DocsFormFilter = React.lazy(() => import("./DocsOrganism/DocsFormFilter"));
const DocsNav = React.lazy(() => import("./DocsOrganism/DocsNav"));
const DocsSidebar = React.lazy(() => import("./DocsOrganism/DocsSidebar"));

const Docsf = (props) => {
  const { token, setToken } = useToken();
  const [show, setShow] = useState(true);  

  const onShow = () => {
    setShow(!show);
  };

  const navigate = useNavigate();

  const { deleteToken } = useToken();

  const closeSession = async () => {
    deleteToken();
    window.location = "/";
  };

  return (
    <div
      className={`sidebar-container ${
        show ? "space-toggle sidebar-container-open" : null
      } `}
    >
      <NavBar
        logo={LogoMab}
        show={show}
        onclick={onShow}
        closeSession={closeSession}
      />
      <SideBar show={show} classname="sidebar p-fixed" bgcolor="bg-gray">       
        <ListGroup classname="uncollapse-sidebar li-items-sidebar">
          <LinkItem
            text="Documentation"
            route="/"
            icon="ant-design:home-filled"
            classname="uncollapse-sidebar-item bb-1-white"
          />
        </ListGroup>

        <Collapse text="Atoms" icon="clarity:list-solid" classname="uncollapse-sidebar-item li-items-sidebar bb-1-white">
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

        <Collapse text="Molecules" icon="clarity:list-solid" classname="uncollapse-sidebar-item li-items-sidebar bb-1-white">
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

        <Collapse text="Organism" icon="clarity:list-solid" classname="uncollapse-sidebar-item li-items-sidebar bb-1-white">
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
            icon="akar-icons:face-very-happy"
            classname="uncollapse-sidebar-item bb-1-white "
          />
        </ListGroup>
       
      </SideBar>

      <Content>
        <Suspense fallback={loading}>
          <Routes>
            <>
              <Route exact path="/button" name="Button" element={<DocsButton />}/>
              <Route exact path="/input" name="Input" element={<DocsInput />} />
              <Route exact path="/badge" name="Badge" element={<DocsBadge />} />
              <Route exact path="/item" name="Item" element={<DocsItem />} />
              <Route exact path="/iconify" name="Iconify" element={<DocsIconify />} />

              <Route exact path="/dropdown" name="Dropdown" element={<DocsDropdown />}/>
              <Route exact path="/collapse" name="Collapse" element={<DocsCollapse />} />
              <Route exact path="/select" name="Select" element={<DocsSelect />} />
              <Route exact path="/table" name="Table" element={<DocsTable />} />

              <Route exact path="/formfilter" name="FormFilter" element={<DocsFormFilter />} />
              <Route exact path="/nav" name="Nav" element={<DocsNav />} />
              <Route exact path="/sidebar" name="Sidebar" element={<DocsSidebar />} />
            </>
          </Routes>
        </Suspense>
      </Content>
    </div>
  );
};

export default Docsf;
