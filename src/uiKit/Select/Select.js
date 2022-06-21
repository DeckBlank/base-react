import React from "react";
import PropTypes from "prop-types";
import "./_Select.scss";

const Select = (props) => {
  let { id, size, selectedtext, labeltext, labelfor } = props;

  return (
    <div className="select-flex-column">
      <label for={labelfor}>{labeltext}</label>
      <select id={id} class="form-select" size={size}>
        <option className="selected-option" selected>{selectedtext}</option>
        {props.children}
      </select>
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  for: PropTypes.string,
};

export default Select;
