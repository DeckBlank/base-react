import React from "react";
import "./_SideBar.scss";

const SideBar = (props) => {

  let{
    show, bgcolor, classname
  }=props

  return (
      <aside className={`${classname} ${show ? "show" : null} ${bgcolor}`}>
          {props.children}
      </aside>
  );
};

export default SideBar;
