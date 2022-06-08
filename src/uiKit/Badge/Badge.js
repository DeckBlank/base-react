import React from "react";
import PropTypes from "prop-types";
import "./_Badge.scss";

const Badge = (props) => {
  const { id, name, bgcolor, txtcolor, position, top, start, translate,  onClick} = props;

  return (
    <span 
      id={id}
      name={name}
      className={`badge rounded-pill bg-${bgcolor} txt-${txtcolor} position-${position} top-${top} start-${start}  translate-${translate}`}
      onClick={onClick}      
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
