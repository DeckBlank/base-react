import React from "react";
import { Icon } from "@iconify/react";
import "./_ButtonItem.scss";
import PropTypes from "prop-types";

const ButtonItem = (props) => {
  let { classname, icon, text, id, name, type, onclick, iconarrowdown, iconarrowup } = props;
  return (
    <div className="btn-item li-content">
      <button
        id={id}
        name={name}
        type={type}
        onClick={onclick}
        className={`d-flex ai-center jc-flex-start ${classname}`}
      >
        <i className="icon d-flex ai-center">
          <Icon icon={icon} />
        </i>
        <div className="d-flex w-100p g-05 jc-space-between">
          <span>{text}</span>
          <i className="icon d-flex ai-center">
            <Icon className="iconArrowUp" icon={iconarrowup} />
            <Icon className="iconArrowDown" icon={iconarrowdown} />
          </i>
        </div>
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
