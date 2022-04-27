import React from "react";
const css = require('./_Button.scss');
export default function Button({ color , className ,text , onClick}) {
  return (<button 
            className={`Button ${color} ${className}`}  
            onClick={onClick}>
               {text} 
          </button>)
}
