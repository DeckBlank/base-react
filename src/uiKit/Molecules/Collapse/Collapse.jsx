import React, { useState } from "react";
import PropTypes from "prop-types";
import "./_Collapse.scss";
import ButtonItem from "../../Atoms/ButtonItem/ButtonItem";

const Collapse = (props) => {

  let {icon, classname, text, iconarrowdown, iconarrowup, classnamecollapse} = props

  const [sCollapse, setsCollapse] = useState(false);   
  const [sCollapseActive, setsCollapseActive] = useState(classnamecollapse);   

  const showCollapse = () => {      
    if(sCollapseActive=="")
    setsCollapse(!sCollapse);        
    setsCollapseActive(""); 
  };

  return (
    <div className={`collapse-group`} >
      <ButtonItem
        text={text}
        icon={icon}
        classname={`${classname} ${sCollapse ? "arrowUp" : "arrowDown"}`} 
        onclick={showCollapse}
        iconarrowdown={iconarrowdown}
        iconarrowup={iconarrowup}
      />
      
      <div className={`${
              sCollapse ? "block" : "none"
            } ${sCollapseActive}`
            } 
      >
       {props.children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  text: PropTypes.string,
};

export default Collapse;
