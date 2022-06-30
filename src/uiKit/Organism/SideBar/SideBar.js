import React from "react";
import "./_SideBar.scss";

const SideBar = (props) => {

  let{
    show, bgcolor, classname
  }=props

  return (
      <aside className={`sidebar ${classname} ${show ? "show" : null} ${bgcolor}`}>
        <nav className="nav">
          {props.children}
        </nav>
      </aside>
  );
};

export default SideBar;
