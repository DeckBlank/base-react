import React from "react";
import "./_SideBar.scss";

const SideBar = (props) => {

  let{
    show, bgcolor
  }=props

  return (
      <aside className={`sidebar ${show ? "show" : null} ${bgcolor}`}>
        <nav className="nav">
          {props.children}
        </nav>
      </aside>
  );
};

export default SideBar;
