import React from "react";
import { Icon } from "@iconify/react";
import "./_ButtonItem.scss";
import PropTypes from "prop-types";

const ButtonItem = (props) => {
  let { classname, icon, text, id, name, type, onclick } = props;
  return (
    <div className="btn-item li-content">
      <button
        id={id}
        name={name}
        type={type}
        onClick={onclick}
        className={`li-items ${classname}`}        
      >
        <i className="icon-flex">
          <Icon icon={icon} />
        </i>
        <span>{text}</span>
      </button>
    </div>
  );
};

ButtonItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default ButtonItem;