import React from "react";
import PropTypes from "prop-types";
import "./_Badge.scss";

const Badge = (props) => {
  const { id, name, bgcolor, txtcolor, position, top, start, translate,  onClick, text, hoverbgcolor, hovertxtcolor, classname} = props;

  return (
    <span 
      id={id}
      name={name}
      className={`badge rounded-pill ${classname} hover-bg-${hoverbgcolor} hover-txt-${hovertxtcolor} bg-${bgcolor} txt-${txtcolor} position-${position} top-${top} start-${start}  translate-${translate}`}
      onClick={onClick}      
    >
      {text}
    </span>
  );
};    

Badge.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Badge;
