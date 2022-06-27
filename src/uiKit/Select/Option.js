import React from 'react'
import PropTypes from "prop-types";
import "./_Select.scss";

const Option = (props) => {
  let {optiontext, value, classname } = props;
  return (
    <option value={value} className={classname} >{optiontext}</option>
  )
}

Option.propTypes = {
  optiontext: PropTypes.string,
  value: PropTypes.string,
};

export default Option