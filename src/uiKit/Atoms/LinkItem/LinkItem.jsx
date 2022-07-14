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
    classnameLi
  } = props;

  return (
    <div className={`p-0 m-0 ${classnameLi}`}>
      <Link
        className={`d-flex ai-center jc-flex-start font-s ${classname}`}
        to={route}
      >
        <i className="icon d-flex ai-center">
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
};

export default LinkItem;
