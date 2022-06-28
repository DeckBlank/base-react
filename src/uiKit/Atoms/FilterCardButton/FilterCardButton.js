import React from 'react'
import PropTypes from "prop-types";
import './_FilterCardButton.scss'

const FilterCardButton = (props) => {
  let {
    id,
    name,
    type,
    bgcolor,
    txtcolor,
    position,
    onclick,
    padding,
    radius,
    hoverbgcolor,
    hovertxtcolor,
    hoverbordercolor,
    count,
    title,
    classname,
  } = props;

  return (
    <button
      id={id}
      name={name}
      type={type}
      className={`btnCard ${classname} hover-bg-${hoverbgcolor} hover-border-${hoverbordercolor} hover-txt-${hovertxtcolor} bg-${bgcolor} txt-${txtcolor} position-${position} padding-${padding} radius-${radius}`}
      onClick={onclick}
    >
      <span>
        {count}
      </span>
      {title}
    </button>
  );
};

FilterCardButton.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default FilterCardButton;