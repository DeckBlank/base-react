import React from "react";
import PropTypes from "prop-types";
import "./_Badge.scss";

const Badge = (props) => {
  const { id, name, type, className, onClick, dataToggle, dataTarget } = props;

  return (
    <span
      id={id}
      name={name}
      type={type}
      className={className}
      onClick={onClick}
      data-toggle={dataToggle}
      data-target={dataTarget}
    >
      {props.children}
    </span>
  );
};

Badge.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Badge;
