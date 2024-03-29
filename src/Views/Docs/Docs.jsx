import React, { Component, Suspense, useState, useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// COMPONENTS
import NavBar from "../../uiKit/Organism/NavBar/NavBar";
import Content from "../../components/Content/Content";
import useToken from "../../useToken";
import SideBar from "../../uiKit/Organism/SideBar/SideBar";
import SidebarFilter from "../../uiKit/Organism/SideBar/SidebarFilter";
import SidebarLink from "../../uiKit/Organism/SideBar/SidebarLink";
//IMAGES
import LogoMab from "../../assets/images/Logo de MAB.png";
//CONTEXT
import { useMainContext } from "../../context/MainContext";
import SidebarNotifications from "../../uiKit/Organism/SideBar/SidebarNotifications";

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
const DocsKeyframes = React.lazy(() => import("./DocsAtoms/DocsKeyframes"));

// DOCS MOLECULES
const DocsCollapse = React.lazy(() => import("./DocsMolecules/DocsCollapse"));
const DocsDropdown = React.lazy(() => import("./DocsMolecules/DocsDropdown"));
const DocsSelect = React.lazy(() => import("./DocsMolecules/DocsSelect"));
const DocsTable = React.lazy(() => import("./DocsMolecules/DocsTable"));
const DocsSlider = React.lazy(() => import("./DocsMolecules/DocsSlider"));

// DOCS ORGANISM
const DocsFormFilter = React.lazy(() =>
  import("./DocsOrganism/DocsFormFilter")
);
const DocsNav = React.lazy(() => import("./DocsOrganism/DocsNav"));
const DocsSidebar = React.lazy(() => import("./DocsOrganism/DocsSidebar"));
const DocsPrueba = React.lazy(() => import("./DocsOrganism/DocsPrueba"));
const DocsModals = React.lazy(() => import("./DocsOrganism/DocsModals"));

const Docs = (props) => {
  const { token, setToken } = useToken();
  const {
    showSidebar,
    setShowSidebar,
    showFilter,
    showNotification,
    setShowNotification,
  } = useMainContext();

  const onShow = () => {
    setShowSidebar(!showSidebar);
  };

  const onShowN = () => {
    setShowNotification(!showNotification);
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
        showSidebar ? "space-toggle sidebar-container-open" : null
      } `}
    >
      <NavBar
        classname="top-0 left-0 p-fixed"
        logo={LogoMab}
        show={showSidebar}
        showN={showNotification}
        onclick={onShow}
        onclickN={onShowN}
        closeSession={closeSession}
      />
      <SideBar
        show={showSidebar}
        classname="sidebar p-fixed"
        bgcolor={showFilter === false ? "bg-white" : "bg-gray"}
      >
        {showFilter === true ? <SidebarFilter /> : <SidebarLink />}
      </SideBar>

      {showNotification === true ? null : (
        <SidebarNotifications
          classname="sidebar-notification"
          showN={showNotification}
        />
      )}

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
                path="/keyframes"
                name="Keyframes"
                element={<DocsKeyframes />}
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
                path="/slider"
                name="Slider"
                element={<DocsSlider />}
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
              <Route
                exact
                path="/sidebar"
                name="Sidebar"
                element={<DocsSidebar />}
              />
              <Route
                exact
                path="/modals"
                name="Modals"
                element={<DocsModals />}
              />
              <Route
                exact
                path="/prueba"
                name="Prueba"
                element={<DocsPrueba />}
              />
            </>
          </Routes>
        </Suspense>
      </Content>
    </div>
  );
};

export default Docs;
