import React from "react";
import "./_Title.scss";

const Title = (props) => {

  let {classname, title} = props

  return (
   <p className={classname}>
    {title}
   </p>
  );
};

export default Title;
