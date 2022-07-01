import React from "react";
import "./_SideBar.scss";

const SideBar = (props) => {

  let{
    show, bgcolor, classname
  }=props

  return (
      <aside className={`${classname} ${show ? "show" : null} ${bgcolor}`}>
        <div className="sidebar-div">
          {props.children}
        </div>
      </aside>
  );
};

export default SideBar;
