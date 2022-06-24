import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import './_LinkItem.scss'

const LinkItem = (props) => {
  let {
    classname,
    icon,
    route,
    text,
  } = props;
  return (
    <div className="li-content">
      <Link
        className={`li-items ${classname}`}
        to={route}
      >
        <i className="icon-flex">
          <Icon icon={icon} />
        </i>
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default LinkItem;
