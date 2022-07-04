import React, { useState } from "react";
import PropTypes from "prop-types";
import "./_Collapse.scss";
import ButtonItem from "../../Atoms/ButtonItem/ButtonItem";

const Collapse = (props) => {

  let {icon, classname, text, iconarrow} = props

  const [sCollapse, setsCollapse] = useState(false);
  const showCollapse = () => {
    setsCollapse(!sCollapse);
  };

  return (
    <div className={`collapse-group`} >
      <ButtonItem
        text={text}
        icon={icon}
        classname={classname}
        onclick={showCollapse}
        iconarrow={iconarrow}
      />
      <div className={`${sCollapse ? "block" : "none"}`} 
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
