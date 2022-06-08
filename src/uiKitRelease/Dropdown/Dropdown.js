import React from "react";
import './_Dropdown.scss'

const Dropdown = (props) => {

  let {
    arialabelledby, 
    dropdown
  }=props

  return (
    <div className="dropdown">         
        {props.children}     
        <ul className={`dropdown-${dropdown} `}  aria-labelledby={arialabelledby}>
          <li>
            <a class="dropdown-item" href="#.">
              Item 1
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#.">
              Item 2
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#.">
              Item 3
            </a>
          </li>
        </ul>
    </div>
  );
};

export default Dropdown;

/*
const Dropdown = (props) => {

    let {
        id, name,className, onClick, 
    }=props

    return(
        <div id={id} name={name} className={className} onClick={onClick}>  
            {props.children}      
        </div>
        
    )
}


Dropdown.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}

export default Dropdown
 */