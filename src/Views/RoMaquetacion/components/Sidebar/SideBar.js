import React, { useState } from "react";
import "./_SideBar.scss";
import NavBar from "../NavBar/NavBar";
import Content from "../Content/Content";

const SideBar = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`sidebar-container ${show ? "space-toggle" : null}`}>
      <NavBar mostrar={show} />

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          {props.children}
        </nav>
      </aside>
      <Content/>
    </div>
  );
};

export default SideBar;
