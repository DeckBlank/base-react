import React from 'react'
import PropTypes from 'prop-types'
import './_Button.scss';

const Button = (props) => {

    let {
        id, 
        name, 
        type, 
        className, 
        onClick, 
        dataToggle, 
        dataTarget, 
    }=props

    return(
        <button 
            id={id} 
            name={name} 
            type={type} 
            className={className} 
            onClick={onClick} 
            data-toggle={dataToggle} 
            data-target={dataTarget}>  
            {props.children}      
        </button>
    )
}

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}

export default Button