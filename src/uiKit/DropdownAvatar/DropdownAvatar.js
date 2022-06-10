import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import "./_DropdownAvatar.scss";

const DropdownAvatar = (props) => {
    
  let { id, type, bgcolor, txtcolor, dropdown, databstoggle, ariaexpanded } =
    props;  
  
  const [sdropdown, setsDropdown] = useState(false);
  const showDropdown = () => {
      setsDropdown(!sdropdown);
    };
  return (
    <div className="dropdown">
      <div className="avatar-dropdown">
      <Button        
        type={type}
        id={id}
        bgcolor={bgcolor}
        txtcolor={txtcolor}
        dropdown={dropdown}
        databstoggle={databstoggle}
        ariaexpanded={ariaexpanded}
        onclick={showDropdown}
      >
        <Avatar/>
        <p>Karina</p>
      </Button>
      </div>
      <ul className='dropdown-menu' aria-labelledby={id} Style={`display: ${ sdropdown ? "block" : "none"};`}>
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
  )
}

export default DropdownAvatar