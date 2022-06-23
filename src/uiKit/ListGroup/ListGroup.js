import React from "react";
import "./_ListGroup.scss";

const ListGroup = (props) => {
  let {
    classname,
  } = props;
  return (
    <ul className={`list-group ${classname}`}>
      {props.children} 
    </ul>
  );
};

export default ListGroup;
