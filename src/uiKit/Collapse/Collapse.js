import React, { useState } from "react";
import PropTypes from "prop-types";
import "./_Collapse.scss";
import ButtonItem from "../ButtonItem/ButtonItem";

const Collapse = (props) => {

  const [sCollapse, setsCollapse] = useState(false);
  const showCollapse = () => {
    setsCollapse(!sCollapse);
  };

  return (
    <div className={`collapse-group`} >
      <ButtonItem
        text="Button for Sidebar"
        icon="bx:package"
        classname="uncollapse-sidebar-item li-items-sidebar"
        onclick={showCollapse}
      />
      <div className={`${sCollapse ? ".block" : ".none"}`}
      >
        {props.children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  text: PropTypes.string,
};

export default Collapse;
