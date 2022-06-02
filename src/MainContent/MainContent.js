import React, { Suspense } from 'react';
import { Route, Routes ,useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import useToken from '../useToken';
import './_MainContent.scss';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Cargando...</div>
  </div>
)

// Pages
const Home = React.lazy(() => import('../Views/Home/Home'));


const MainContent = () => {
  const navigate = useNavigate();
  const {deleteToken} = useToken();
  const closeSession = async () => {
    deleteToken();
    window.location = '/';
  };
  return (
    <div  >
        <NavBar closeSession={closeSession}/>        
        <div  className="wrapper">    
        <Suspense fallback={loading}>
            <Routes>                
                <Route exact path="/" name="Home" element={<Home />} />
            </Routes>
        </Suspense>    
        </div>
    </div>
  )
}

export default MainContent
