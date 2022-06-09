import React from "react";
import { Link } from "react-router-dom";

const DropdownLink = (props) => {
  return (
    <li className={props.className}>
      <Link to={props.link} onClick={props.onClick}>
        {props.name}
      </Link>
    </li>
  );
};

export default DropdownLink;
