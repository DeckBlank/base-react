import React, { Component, Suspense, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
// import { AiFillHome } from "react-icons/ai";
// import { IoIosListBox } from "react-icons/io";
// import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Content from "../../components/Content/Content";
import LogoMab from "../../assets/images/Logo de MAB.png";
import useToken from "../../useToken";
import SideBarListGroup from "../../assets/Jsons/sidebar-list -docs.json";
import ListGroup from "../../uiKit/ListGroup/ListGroup";
import LinkItem from "../../uiKit/LinkItem/LinkItem";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Cargando...</div>
  </div>
);

// Pages
//PageDocs
const DocsButton = React.lazy(() => import("./DocsButton"));
const DocsInput = React.lazy(() => import("./DocsInput"));
const DocsBadge = React.lazy(() => import("./DocsBadge"));
const DocsFilterCardBtn = React.lazy(() => import("./DocsFilterCardBtn"));
const FormFilter = React.lazy(() => import("./DocsFormFilter"));
const DocsDropdown = React.lazy(() => import("./DocsDropdown"));
// const DocsGroupButton = React.lazy(() => import("./DocsGroupButton"));
const DocsTable = React.lazy(() => import("./DocsTable"));

const Docs = (props) => {
  const location = useLocation();

  console.log("hash", location.hash);
  console.log("pathname", location.pathname);
  console.log("search", location.search);

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
        <ListGroup classname="uncollapse-sidebar li-items-sidebar">
          {SideBarListGroup.map((item, index) => (
            <LinkItem
              text={item.display_name}
              route={item.route}
              icon={item.icon}
              classname="uncollapse-sidebar-item border-bottom-sidebar "
              key={index}
            />
          ))}
        </ListGroup>
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
                path="/formfilter"
                name="FormFilter"
                element={<FormFilter />}
              />
            </>
          </Routes>
        </Suspense>
      </Content>
    </div>
  );
};

export default Docs;
