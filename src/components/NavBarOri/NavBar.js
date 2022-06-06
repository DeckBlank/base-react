import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import OpenMenuWidget from './OpenMenuWidget'
import CloseMenuWidget from './CloseMenuWidget'
import NavBarLink from './NavBarLink'
import FavoritesWidget from '../FavoritesWidget/FavoritesWidget'
import CartWidget from '../CartWidget/CartWidget'
import "./_NavBar.scss"

function NavBar({closeSession}){
    const[menu, setMenu] = useState(false)
    
    const openMenu = () => setMenu(true)
    const closeMenu = () => setMenu(false)
    return(
    <nav className="nav">
        <OpenMenuWidget onClick={openMenu} />
        <div className="navLogo">
            <Link to="/" className="navLogo_a" onClick={closeMenu}>Administrador cursos</Link>
        </div>
        <div className={menu===false?'navLinks':'navLinks active'} >
            <div className="sidebarLogo">
                <h2>Administrador cursos</h2>
                <CloseMenuWidget onClick={closeMenu} />
            </div>
            <ul className="navLinks_ul">
                <NavBarLink className="navLinks_ul_li" link="/" name="Todos los cursos" onClick={closeMenu}/>
                <li className="navLinks_ul_li">
                    <Link to="/">Subir Curso<span className="fas fa-chevron-down arrow navLinks_ul_li_span" /></Link>
                    <ul className="navLinks_ul_li_ul">
                        <NavBarLink className="navLinks_ul_li_ul_li" link="/subir-curso-json" name="Con archivo" onClick={closeMenu} />
                        {/* <NavBarLink className="navLinks_ul_li_ul_li" link="/" name="Portada" onClick={closeMenu} />
                        <NavBarLink className="navLinks_ul_li_ul_li" link="/" name="Speaker" onClick={closeMenu} />
                        <NavBarLink className="navLinks_ul_li_ul_li" link="/" name="Precio" onClick={closeMenu} />
                        <NavBarLink className="navLinks_ul_li_ul_li" link="/" name="Matriculados" onClick={closeMenu} /> */}
{/*                         <NavBarLink className="navLinks_ul_li_ul_li" link="/category/computadoras" name="Computadoras" onClick={closeMenu} />
                        <NavBarLink className="navLinks_ul_li_ul_li" link="/category/monitores" name="Monitores" onClick={closeMenu} /> */}
                    </ul>
                </li>
                {/* <NavBarLink className="navLinks_ul_li" link="/about" name="Nosotros" onClick={closeMenu}/>
                <NavBarLink className="navLinks_ul_li" link="/contact" name="Contacto" onClick={closeMenu}/> */}
            </ul>
        </div>
        
        <div className="navCart">
        {/* <FavoritesWidget onClick={closeMenu}/>
        <CartWidget onClick={closeMenu}/> */}
            <ul className="navLinks_ul">
                <li className="navLinks_ul_li">
                    <Link to="/">Usuario<span className="fas fa-chevron-down arrow navLinks_ul_li_span" /></Link>
                    <ul className="navLinks_ul_li_ul">
                        <NavBarLink className="navLinks_ul_li_ul_li" link="/" name="Salir" onClick={closeSession} />
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;