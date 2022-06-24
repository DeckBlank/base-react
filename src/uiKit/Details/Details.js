import React from "react";
import PropTypes from "prop-types";
import "./_Details.scss";

const Details = (props) => {
  let {
    id,
    name,
    bgcolor,
    txtcolor,
    position,
    padding,
    radius,
    hoverbgcolor,
    hovertxtcolor,
    hoverbordercolor,
    classname,
    summary,
  } = props;

  return (
    <details
      id={id}
      name={name}
      className={`dtails ${classname} hover-border-${hoverbordercolor} hover-bg-${hoverbgcolor} hover-txt-${hovertxtcolor} bg-${bgcolor} txt-${txtcolor} position-${position} padding-${padding} radius-${radius}`}
    >
      <summary className={`txt-${txtcolor}`}>{summary}</summary>
      {props.children}
    </details>
  );
};

Details.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Details;
