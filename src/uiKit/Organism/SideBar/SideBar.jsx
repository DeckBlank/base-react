import React from "react";
import "./_SideBar.scss";

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
