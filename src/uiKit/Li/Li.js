import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import './_Li.scss'

const Li = (props) => {
  let {
    classname,
    icon,
    route,
    text,
  } = props;
  return (
    <li className="li-content">
      <Link
        className={`li-items ${classname}`}
        to={route}
      >
        <i className="icon-flex">
          <Icon icon={icon} />
        </i>
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default Li;
