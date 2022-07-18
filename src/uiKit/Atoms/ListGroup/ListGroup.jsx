import React from "react";
import "./_ListGroup.scss";

const ListGroup = (props) => {
  let {
    classname,
  } = props;

  return (
    <div className={`list-group ${classname}`}>
      {props.children} 
    </div>
  );
  
};

export default ListGroup;
