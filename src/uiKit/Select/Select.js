import React from "react";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import "./_Select.scss";

const Select = (props) => {
  let { id, size, selectedtext, labeltext, labelfor } = props;

  return (
    <div className="select-flex-column ">
      <label for={labelfor}>{labeltext}</label>
      <div className="content-select">
      <select id={id} className="form-select" size={size}>
      
        <option className="collapse-selects-item border-top-formfilter selected-option" selected>{selectedtext}</option>
        
        {props.children}     
      </select>
      <IoIosArrowDown className="icon-select"/>
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
