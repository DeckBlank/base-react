import React from "react";
import PropTypes from "prop-types";
import "./_Button.scss";

const Button = (props) => {
  let {
    id,
    name,
    type,
    bgcolor,
    txtcolor,
    position,
    dropdown,
    databstoggle,
    ariaexpanded,
    onclick,
    padding,
    radius,
    hoverbgcolor,
    hovertxtcolor,
    hoverbordercolor,
    classname,
    alt
  } = props;

  return (
    <button
      id={id}
      name={name}
      type={type}
      alt={alt}
      className={`btn ${classname} h-b-${hoverbordercolor} h-bg-${hoverbgcolor} h-txt-${hovertxtcolor} bg-${bgcolor} txt-${txtcolor} p-${position} dropdown-${dropdown} padding-${padding} radius-${radius}`}
      data-bs-toggle={databstoggle}
      aria-expanded={ariaexpanded}
      onClick={onclick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default Button;
