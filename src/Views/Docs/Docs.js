import React, { Component, Suspense, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// COMPONENTS
import NavBar from "../../uiKit/Organism/NavBar/NavBar";
import SideBar from "../../uiKit/Organism/SideBar/SideBar";
import Content from "../../components/Content/Content";
import LogoMab from "../../assets/images/Logo de MAB.png";
import useToken from "../../useToken";
import SidebarFilter from "../../uiKit/Organism/SidebarFilter/SidebarFilter";
import SidebarLink from "../../uiKit/Organism/SidebarLink/SidebarLink";

//CONTEXT
import {FilterContext} from "../../context/FilterContext";

// LOADER
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Cargando...</div>
  </div>
);

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
const DocsPrueba = React.lazy(() => import("./DocsOrganism/DocsPrueba"));
const DocsModals = React.lazy(() => import("../Docs/DocsOrganism/DocsModals"));

const Docs = (props) => {
  const { token, setToken } = useToken();
  const [show, setShow] = useState(true);  
  const [showFilter, setShowFilter] = useState(false);

  const onShow = () => {
    setShow(!show);
  };

  const onShowFilter = (showFilter) => {  
    setShowFilter(showFilter);    
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
      <SideBar show={show} classname="sidebar p-fixed" bgcolor={ showFilter===true ? "bg-white" : "bg-gray" }>        
        { showFilter===true ? <SidebarFilter onshowfilter={onShowFilter} /> : <SidebarLink/> }
      </SideBar>

      <Content>
        
        <Suspense fallback={loading}>
          <Routes>
            <>
              <Route
                exact
                path="/button"
                name="Button"
                element={<DocsButton />}
              />
              <Route exact path="/input" name="Input" element={<DocsInput />} />
              <Route exact path="/badge" name="Badge" element={<DocsBadge />} />
              <Route exact path="/item" name="Item" element={<DocsItem />} />
              <Route
                exact
                path="/iconify"
                name="Iconify"
                element={<DocsIconify />}
              />

              <Route
                exact
                path="/dropdown"
                name="Dropdown"
                element={<DocsDropdown />}
              />
              <Route
                exact
                path="/collapse"
                name="Collapse"
                element={<DocsCollapse />}
              />
              <Route
                exact
                path="/select"
                name="Select"
                element={<DocsSelect />}
              />
              <Route exact path="/table" name="Table" element={<DocsTable />} />

              <Route
                exact
                path="/formfilter"
                name="FormFilter"
                element={<DocsFormFilter />}
              />
              <Route exact path="/nav" name="Nav" element={<DocsNav />} />
              <Route exact path="/sidebar" name="Sidebar" element={<DocsSidebar />} />  
              <Route exact path="/modals" name="Modals" element={<DocsModals />} />              
              <Route exact path="/prueba" name="Sidebar" element={<DocsPrueba onshowfilter={onShowFilter} />} />
            </>
          </Routes>
        </Suspense>
      </Content>
    </div>
  );
};

export default Docs;
