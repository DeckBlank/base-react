import React from "react";
import PropTypes from "prop-types";
import "./_RadioBtn.scss";

const RadioBtn = (props) => {
  let { id, name, text, value, _onchange, classname, htmlfor } = props;

  return (
    <label id={id} htmlFor={htmlfor} className={`form-control ${classname}`}>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={_onchange}
      />
      {text}
    </label>
  );
};

RadioBtn.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default RadioBtn;