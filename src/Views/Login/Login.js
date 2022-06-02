import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './_Login.scss';
import {loginUser, setDefaultHeader} from '../../requests/login';

export default function Login({ setToken }) {

  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    console.log(response);
    const {data, status , message} = response;
    if(!data) alert('Usuario o contraseña incorrectos');
    else {
      setToken(data);
    }
  }

  return(
    <div className="login-wrapper">
      <h1>Ingresa</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Clave</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};