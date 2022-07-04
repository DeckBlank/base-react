import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from '../../Atoms/Button/Button'
import "./_Dropdown.scss";
import { Icon } from "@iconify/react";

const Dropdown = (props) => {
  
  let { id, type, icon, iconarrow, classarrow, classbtn, classtext, direction, dropdown, ariaLabelledby, text, classname } =
    props;  
  
  const [sdropdown, setsDropdown] = useState(false);
  const showDropdown = () => {
      setsDropdown(!sdropdown);
    };
 
  return (
    <div className={`dropdown-group zi-10 ${direction} ${classname}`} >
      <Icon icon={iconarrow} className={`${classarrow} icon-arrow-drop zi-20`} />
      <Button        
        type={type}
        id={id}
        dropdown={dropdown}
        data-bs-toggle="dropdown"
        ariaexpanded="false"
        onclick={showDropdown}
        classname={`d-flex ai-center w-100p zi-30 ${classbtn}`}
      >
        <Icon icon={icon} />
        <p className={classtext}>{text}</p>        
      </Button>
      <div className={`dropdown-menu zi-40 ${sdropdown ? "block" : "none"}`} aria-labelledby={ariaLabelledby}>
        {props.children}
      </div>
    </div>
    
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
};

export default Dropdown;
