import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import "./_Select.scss";

const Select = (props) => {
  let { id, size, selectedtext, labeltext, htmlfor } = props;

  return (
    <div className="select-flex-column ">
      <label htmlFor={htmlfor}>{labeltext}</label>
      <div className="content-select">
      <select id={id} className="form-select" size={size}>      
        <option className="collapse-selects-item bt-formfilter selected-option" defaultValue={selectedtext}>{selectedtext}</option>      
        {props.children}     
      </select>
      <Icon icon="eva:arrow-ios-downward-outline" className="icon-select"/>
      </div>
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
