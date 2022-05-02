import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FavoritesContextProvider } from './context/FavoritesContext';
import { CartContextProvider } from './context/CartContext';
import useToken from './useToken'
import './App.scss'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Cargando...</div>
  </div>
)

// Container
const MainContent = React.lazy(() => import('./Views/Layout/MainContent.js'))

// Pages
const Login = React.lazy(() => import('./Views/Login/Login'))
const Register = React.lazy(() => import('./Views/Register/Register.js'))
const Page404 = React.lazy(() => import('./Views/Page404/Page404'))
const Page500 = React.lazy(() => import('./Views/Page500/Page500'))


function App() { 

    const { token, setToken } = useToken();
    
    if(!token) 
    {
      return <Login setToken={setToken} />
    }       
    
    return (       
      <CartContextProvider>
        <FavoritesContextProvider>
          <div className="wrapper"> 
          <BrowserRouter>
              <Suspense fallback={loading}>
                  <Routes>
                    <Route exact path="/login" name="Login Page" element={<Login />} />
                    <Route exact path="/register" name="Register Page" element={<Register />} />
                    <Route exact path="/404" name="Page 404" element={<Page404 />} />
                    <Route exact path="/500" name="Page 500" element={<Page500 />} />
                    <Route path="*" name="Home" element={<MainContent />} />
                  </Routes>
                </Suspense>
          </BrowserRouter>
          </div>
        </FavoritesContextProvider>
      </CartContextProvider>    
  )    
}

export default App
