import React from "react";
import "./_SideBar.scss";
import Content from "../Content/Content";

const SideBar = (props) => {

  let{
    show, bgcolor, 
  }=props

  return (
    <div>    
      <div className={`sidebar-container ${show ? "space-toggle" : null} `}> 
        <aside className={`sidebar ${show ? "show" : null} ${bgcolor}`}>
          <nav className="nav">
            {props.children}
          </nav>
        </aside>
        <Content/>
      </div>
    </div>
  );
};

export default SideBar;
