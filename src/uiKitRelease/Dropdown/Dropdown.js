import React from "react";
import './_Dropdown.scss'

const Dropdown = () => {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Karina
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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