import React, { Component, Suspense, useState } from "react";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillHome } from "react-icons/ai";
import { IoIosListBox } from "react-icons/io";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { faFileLines, faBell  } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Content from "../../components/Content/Content";
import LogoMab from "../../assets/images/Logo de MAB.png";
import useToken from "../../useToken";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Cargando...</div>
  </div>
);

// Pages
//PageDocs
const DocsButton = React.lazy(() => import("./DocsButton"));
const DocsBadge = React.lazy(() => import("./DocsBadge"));
const DocsFilterCardBtn = React.lazy(() => import("./DocsFilterCardBtn"));
const DocsDropdown = React.lazy(() => import("./DocsDropdown"));
const DocsGroupButton = React.lazy(() => import("./DocsGroupButton"));
const DocsTable = React.lazy(() => import("./DocsTable"));

const Docs = (props) => {
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

      <SideBar show={show} bgcolor="bg-gray">
        <div>
          <Link to="/badge" className="nav-link">
            <AiFillHome className="nav-link-icon"/>
            {/* <FontAwesomeIcon icon={faBell} className="nav-link-icon" /> */}
            <span className="nav-link-name">Badge</span>
          </Link>
          <hr className="hr-sidebar" />

          <Link to="/button" className="nav-link">
            <IoIosListBox className="nav-link-icon"/>
            <span className="nav-link-name">Buttons</span>
          </Link>
          <hr className="hr-sidebar" />

          <Link to="/filtercardbtn" className="nav-link">
            <IoIosListBox className="nav-link-icon"/>
            <span className="nav-link-name">FiltersCard</span>
          </Link>
          <hr className="hr-sidebar" />

          <Link to="/dropdown" className="nav-link">
            <BsFillFileEarmarkBarGraphFill className="nav-link-icon"/>
            <span className="nav-link-name">Dropdown</span>
          </Link>
          <hr className="hr-sidebar" />

          <Link to="/table" className="nav-link">
            <FontAwesomeIcon icon={faFileLines} className="nav-link-icon" />
            <span className="nav-link-name">Table</span>
          </Link>
          <hr className="hr-sidebar" />

          <div className="nav-list"></div>
        </div>

        <Link to="/ro-maquetacion" className="nav-link">
          <FontAwesomeIcon icon={faBell} className="nav-link-icon" />
          <span className="nav-link-name">Cerrar Sesión</span>
        </Link>
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
              <Route exact path="/badge" name="Badge" element={<DocsBadge />} />
              <Route exact path="/table" name="Table" element={<DocsTable />} />
              <Route
                exact
                path="/filtercardbtn"
                name="DocsFilterCardBtn"
                element={<DocsFilterCardBtn />}
              />
              <Route
                exact
                path="/dropdown"
                name="Dropdown"
                element={<DocsDropdown />}
              />
              <Route
                exact
                path="/radiobtn"
                name="RadioButton"
                element={<DocsGroupButton />}
              />
            </>
          </Routes>
        </Suspense>
      </Content>
    </div>
  );
};

export default Docs;
