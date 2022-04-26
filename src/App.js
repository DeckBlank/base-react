import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Dashboard from './Views/Dashboard/Dashboard';
import Login from './Views/Login/Login';
import Preferences from './Views/Preferences/Preferences';
import useToken from './useToken';
import NavBar from './components/NavBar/NavBar';
import { FavoritesContextProvider } from './context/FavoritesContext';
import { CartContextProvider } from './context/CartContext';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <CartContextProvider>
      <FavoritesContextProvider>
      <div className="wrapper">
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}>
            </Route>
            <Route exact path="/preferences" element={<Preferences/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      </FavoritesContextProvider>
    </CartContextProvider>
  );
}

export default App;