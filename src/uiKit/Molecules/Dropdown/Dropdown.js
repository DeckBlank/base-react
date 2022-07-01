import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from '../../Atoms/Button/Button'
import "./_Dropdown.scss";
import { Icon } from "@iconify/react";

const Dropdown = (props) => {
  
  let { id, type, icon, iconarrow, classarrow, classbtn, direction, dropdown, ariaLabelledby, text, classname } =
    props;  
  
  const [sdropdown, setsDropdown] = useState(false);
  const showDropdown = () => {
      setsDropdown(!sdropdown);
    };
 
  return (
    <div className={`dropdown-group ${direction} ${classname}`} >
      <Icon icon={iconarrow} className={classarrow} />
      <Button        
        type={type}
        id={id}
        dropdown={dropdown}
        data-bs-toggle="dropdown"
        ariaexpanded="false"
        onclick={showDropdown}
        classname={`d-flex ai-center w-100p ${classbtn}`}
      >
        <Icon icon={icon} />
        {text}
      </Button>
      <div className="dropdown-menu" aria-labelledby={ariaLabelledby} style={{display: `${ sdropdown ? "block" : "none"}`}}>
        {props.children}
      </div>
    </div>
    
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
};

export default Dropdown;
