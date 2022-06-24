import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from '../Button/Button'
import "./_Collapse.scss";

const Collapse = (props) => {
  
  let { id, type, direction, bgcolor, txtcolor, collapse, ariaLabelledby, text, hoverbgcolor, hovertxtcolor } =
    props;  
  
  const [sCollapse, setsCollapse] = useState(false);
  const showCollapse = () => {
      setsCollapse(!sCollapse);
    };
 
  return (
    <div className={`collapse-group ${direction}`}>
      <Button       
        type={type}
        id={id}
        bgcolor={bgcolor}
        txtcolor={txtcolor}
        collapse={collapse}
        data-bs-toggle="collapse"
        ariaexpanded="false"
        onclick={showCollapse}
        hoverbgcolor={hoverbgcolor}
        hovertxtcolor={hovertxtcolor}
      >
        {text}
      </Button>
      <div className="collapse-menu" aria-labelledby={ariaLabelledby} Style={`display: ${ sCollapse ? "block" : "none"};`}>
        {props.children}
      </div>
    </div>
    
  );
};

Collapse.propTypes = {
  text: PropTypes.string,
};

export default Collapse;
