import React from "react";
import PropTypes from "prop-types";
import "./_SwitchBtn.scss";

const SwitchBtn = (props) => {
  let { id, name, text, value, classname } = props;

  return (
    <label id={id} className={`switch ${classname}`}>
      {text}
      <input
        type="checkbox"
        name={name}
        value={value}
      />
      <span className="slider round"></span>      
    </label>
  );
};

SwitchBtn.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default SwitchBtn;