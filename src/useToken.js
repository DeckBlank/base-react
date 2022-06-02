import { useState } from 'react';
import { setDefaultHeader } from './requests/login';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if(!userToken) return null;
    setDefaultHeader({header:'Authorization',value:`Bearer ${userToken.token}`});
    return userToken.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };
  const deleteToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return {
    setToken: saveToken,
    deleteToken: deleteToken,
    token
  }
}