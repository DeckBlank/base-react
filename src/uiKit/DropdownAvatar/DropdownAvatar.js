import React, {useState} from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import "./_DropdownAvatar.scss";

const DropdownAvatar = (props) => {
  let { id, type, direction, bgcolor, txtcolor, dropdown, ariaLabelledby, text, hoverbgcolor, hovertxtcolor} =
    props;  
  
  const [sdropdown, setsDropdown] = useState(false);
  const showDropdown = () => {
      setsDropdown(!sdropdown);
    };
 
  return (
    <div className={`dropdown-group ${direction} hover-bg-${hoverbgcolor} hover-txt-${hovertxtcolor}`}>
      <div className="avatar-dropdown">
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
        <Avatar/>
        {text}
      </Button>
      </div>
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
}

DropdownAvatar.propTypes = {
  text: PropTypes.string,
};

export default DropdownAvatar