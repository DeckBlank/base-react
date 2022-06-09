import React, { Suspense, useState } from 'react';
import { Route, Routes ,useNavigate, Link } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import Content from "../components/Content/Content";
import LogoMab from "../assets/images/Logo de MAB.png";
import useToken from '../useToken';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import './_MainContent.scss';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Cargando...</div>
  </div>
)

// Pages
const Home = React.lazy(() => import('../Views/Home/Home'));

const MainContent = () => {

  const [show, setShow] = useState(true);

  const onShow = () => {
    setShow(!show)  
  } 
  const navigate = useNavigate();

  const {deleteToken} = useToken();

  const closeSession = async () => {
    deleteToken();
    window.location = '/';
  };

  return (         
      <div className={`sidebar-container ${show ? "space-toggle sidebar-container-open" : null} `}> 
      <NavBar logo={LogoMab} show={show} onclick={onShow} closeSession={closeSession} /> 
      <SideBar show={show} bgcolor="bg-gray" >
        <Suspense fallback={loading}>
          <div>       
            
            <Link to="/ro-maquetacion" className="nav-link">
             <FontAwesomeIcon icon={faFileLines} className="nav-link-icon" />
              <span className="nav-link-name">Inicio</span>
            </Link> 
  
            <hr className='hr-sidebar'/>

            <div className="nav-list">
              <Link to="/ro-maquetacion" className="nav-link">
               <FontAwesomeIcon icon={faFileLines} className="nav-link-icon" />
                <span className="nav-link-name">Lista</span>
              </Link> 
              
              <hr className='hr-sidebar'/>

              <Link to="/ro-maquetacion" className="nav-link">
               <FontAwesomeIcon icon={faFileLines} className="nav-link-icon" />
                <span className="nav-link-name">Reportes</span>
              </Link> 
              
              <hr className='hr-sidebar'/>
            </div>
          </div>
          <Link to="/ro-maquetacion" className="nav-link">
           <FontAwesomeIcon icon={faFileLines} className="nav-link-icon" />
            <span className="nav-link-name">Cerrar Sesión</span>
          </Link>
          
        </Suspense>    
      </SideBar>
      <Content/>
      </div>        
  )
}

export default MainContent
