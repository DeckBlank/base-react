import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '../Button/Button'
import "./_Dropdown.scss";

const Dropdown = (props) => {
  
  let { id, type, direction, bgcolor, txtcolor, dropdown, ariaLabelledby } =
    props;  
  
  const [sdropdown, setsDropdown] = useState(false);
  const showDropdown = () => {
      setsDropdown(!sdropdown);
    };
 
  return (
    <div className={`dropdown-group ${direction}`}>
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
        Lorem Ipsum
      </Button>
      <ul className="dropdown-menu" aria-labelledby={ariaLabelledby} Style={`display: ${ sdropdown ? "block" : "none"};`}>
        <li>
          <Link className="dropdown-item" to="./">
            Item 1
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="./">
            Item 2
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="./">
            Item 3
          </Link>
        </li>
      </ul>
    </div>
    
  );
};

export default Dropdown;
