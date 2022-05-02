import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
//import Content from '../../components/Content/Content'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

import './_MainContent.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Cargando...</div>
  </div>
)

// Pages
const Dashboard = React.lazy(() => import('../../Views/Dashboard/Dashboard'))

const MainContent = () => {
  return (
    <div>
        <NavBar />        
        <div className="flex">    
        <SideBar />       
        <Breadcrumb />
        <Suspense fallback={loading}>
            <Routes>                
                <Route exact path="/dashboard" name="Dashboard" element={<Dashboard />} />
            </Routes>
        </Suspense>    
        </div>
    </div>
  )
}

export default MainContent
