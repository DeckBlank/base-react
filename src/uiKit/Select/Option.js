import React from 'react'
import PropTypes from "prop-types";
import "./_Select.scss";

const Option = (props) => {
  let {optiontext, value } = props;
  return (
    <option value={value}>{optiontext}</option>
  )
}

Option.propTypes = {
  optiontext: PropTypes.string,
  value: PropTypes.string,
};

export default Option