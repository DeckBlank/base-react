import React from "react";
import "./_SideBar.scss";
import { useMainContext } from "../../../context/MainContext";
import SidebarFilter from "../SidebarFilter/SidebarFilter";
import SidebarLink from "../SidebarLink/SidebarLink";

const SideBar = (props) => {
  let{
    show, bgcolor, classname
  }=props 

  return (
      <aside className={`zi-1000 ${classname} ${show ? "show" : null} ${bgcolor}`}>          
          {props.children}
      </aside>
  );
};

export default SideBar;
