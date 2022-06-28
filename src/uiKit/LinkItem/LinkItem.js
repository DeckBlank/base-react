import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import './_LinkItem.scss'
import PropTypes from "prop-types";

const LinkItem = (props) => {
  let {
    classname,
    icon,
    route,
    text,
    key
  } = props;
  return (
    <div className="li-content" key={key}>
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
LinkItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  key: PropTypes.string,
};
export default LinkItem;
