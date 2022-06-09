import React from 'react'
import PropTypes from 'prop-types'
import './_Button.scss';

const Button = (props) => {

    let {
        id, 
        name, 
        type,  
        bgcolor,
        txtcolor,     
        position, 
        dropdown,
        databstoggle,
        ariaexpanded,
        onclick 
    }=props

    return(
        <button 
            id={id} 
            name={name} 
            type={type} 
            className={`btn bg-${bgcolor} txt-${txtcolor} position-${position} dropdown-${dropdown}`} 
            data-bs-toggle={databstoggle}
            aria-expanded={ariaexpanded}
            onClick={onclick} 
           >
            {props.children}      
        </button>
    )
}

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
}

export default Button