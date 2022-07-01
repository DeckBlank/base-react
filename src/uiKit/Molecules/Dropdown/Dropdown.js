import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from '../../Atoms/Button/Button'
import "./_Dropdown.scss";

const Dropdown = (props) => {
  
  let { id, type, direction, bgcolor, txtcolor, dropdown, ariaLabelledby, text } =
    props;  
  
  const [sdropdown, setsDropdown] = useState(false);
  const showDropdown = () => {
      setsDropdown(!sdropdown);
    };
 
  return (
    <div className={`dropdown-group ${direction}`} >
      <Button        
        type={type}
        id={id}
        bgcolor={bgcolor}
        txtcolor={txtcolor}
        dropdown={dropdown}
        data-bs-toggle="dropdown"
        ariaexpanded="false"
        onclick={showDropdown}
      >
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
