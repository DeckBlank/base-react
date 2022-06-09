import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import "./_Dropdown.scss";

const Dropdown = (props) => {
  let { arialabelledby } = props;
  const [dropdown, setDropdown] = useState(false)
  const showDropdown =() => {
    setDropdown(!dropdown);
  }
  return (
    <div className="dropdown">
      {props.children}
      <ul className={`dropdown-${dropdown} `} aria-labelledby={arialabelledby}>
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
          <Link  className="dropdown-item" to="./">
            Item 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;

