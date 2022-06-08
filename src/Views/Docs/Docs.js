import React, { Component, Suspense, useState } from 'react'
import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Content from "../../components/Content/Content";
import LogoMab from "../../assets/images/Logo de MAB.png";
import useToken from '../../useToken';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Cargando...</div>
  </div>
)

// Pages
//PageDocs
const DocsButton = React.lazy(() => import('./DocsButton'))
const DocsBadge = React.lazy(() => import('./DocsBadge'))
const DocsGroupButton = React.lazy(() => import('./DocsGroupButton'))
const DocsTable = React.lazy(() => import('./DocsTable'))

const Docs = (props) => {

    const { token, setToken } = useToken();
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
            <div>       
                <Link to="/avatar" className="nav-link">
                    <i className="fas fa-solid fa-bell nav-link-icon"></i>
                    <span className="nav-link-name">Avatar</span>
                </Link>                 
                <hr className='hr-sidebar'/>

                <Link to="/badge" className="nav-link active" >
                <i className="fa fa-solid fa-home nav-link-icon"></i>
                <span className="nav-link-name">Badge</span>
                </Link>                 
                <hr className='hr-sidebar'/>

                <Link to="/button" className="nav-link active">
                <i className="fa fa-solid fa-home nav-link-icon"></i>
                <span className="nav-link-name">Buttons</span>
                </Link>
                <hr className='hr-sidebar'/>

                <Link to="/buttongroup" className="nav-link">
                    <i class="fa fa-light fa-file-lines nav-link-icon"></i>
                    <span className="nav-link-name">Group button</span>
                </Link> 
                <hr className='hr-sidebar'/>   

                <Link to="/table" className="nav-link">
                    <i class="fa fa-light fa-file-lines nav-link-icon"></i>
                    <span className="nav-link-name">Table</span>
                </Link> 
                <hr className='hr-sidebar'/>   

                <div className="nav-list"></div>
                
            </div>

            <Link to="/ro-maquetacion" className="nav-link">
            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-arc" /> */}
                <i className="fas fa-solid fa-arrow-right-from-arc"></i>
                <span className="nav-link-name">Cerrar Sesión</span>
            </Link>               
        </SideBar>

        <Content>
            <Suspense fallback={loading}>
                <Routes>
                    <>
                    <Route exact path="/button" name="Button" element={<DocsButton/>} />
                    <Route exact path="/badge" name="Badge" element={<DocsBadge/>} />   
                    <Route exact path="/table" name="Table" element={<DocsTable/>} />                      
                    <Route exact path="/buttongroup" name="ButtonGroup" element={<DocsGroupButton/>} /> 
                    </>     
                </Routes>
            </Suspense>               
        </Content>
    
    </div>           
  )
}

export default Docs
