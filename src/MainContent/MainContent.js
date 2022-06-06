import React, { Suspense, useState } from 'react';
import { Route, Routes ,useNavigate, Link } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/Sidebar/SideBar";
import Content from "../components/Content/Content";
import Button from '../uiKit/Button/Button'
import Badge from '../uiKit/Badge/Badge'
import LogoMab from "../assets/images/Logo de MAB.png";
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

  const [show, setShow] = useState(true);

  const onShow = () => {
    show==true ? setShow(false) :  setShow(true);   
  } 
  const navigate = useNavigate();

  const {deleteToken} = useToken();

  const closeSession = async () => {
    deleteToken();
    window.location = '/';
  };

  return (
    <div>   
      
      <div className={`sidebar-container ${show ? "space-toggle" : null} `}> 
      <NavBar logo={LogoMab} show={show} onclick={onShow} closeSession={closeSession} /> 
      <SideBar show={show} bgcolor="bg-gray" >
        <Suspense fallback={loading}>
          <div>       
            
            <Link to="/ro-maquetacion" className="nav-logo">
              <i className="fa fa-solid fa-home nav-logo-icon"></i>
              <span className="nav-logo-name">Inicio</span>
            </Link>

            <div className="nav-list">
              <Link to="/ro-maquetacion" className="nav-link active">
                <i class="fa fa-light fa-file-lines nav-link-icon"></i>
                <span className="nav-link-name">Lista</span>
              </Link>

              <Link to="/ro-maquetacion" className="nav-link">
                <i className="fas fa-solid fa-bell nav-link-icon"></i>
                <span className="nav-link-name">Reportes</span>
              </Link>
            </div>
          </div>

          <Link to="/ro-maquetacion" className="nav-link">
            <i className="fas fa-solid fa-bell nav-link-icon"></i>
            <span className="nav-link-name">Cerrar Sesión</span>
          </Link>
          
        </Suspense>    
      </SideBar>

      <Content>
        <Button className='btn btn-yellow position-relative'>
            <i className="fas fa-solid fa-bell"></i>
            <Badge className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-red txt-white">99</Badge>
        </Button>
      </Content>
      </div>      
    </div>    
  )
}

export default MainContent
