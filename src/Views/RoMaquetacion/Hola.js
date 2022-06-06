import React from 'react';
import PropTypes from 'prop-types'

const Hola = ({name, dni}) => {
  return (
    <>
      <p>nombre: {name} </p>
      <p>dni: {dni} </p>
    </>
  )
}

Hola.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.number,
}

Hola.defaultProps = {
  name: 'Nombre por Defecto',
  dni: 10000000,
}


export default Hola