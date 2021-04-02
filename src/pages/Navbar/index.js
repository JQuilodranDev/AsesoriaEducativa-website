import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { VscGlobe } from "react-icons/vsc";
import {  FaBars, FaTimes} from 'react-icons/fa'
import { Button } from '../../components'
import './navbar.css'
import { IconContext} from 'react-icons/lib'


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] =useState(true)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick
    (false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }else {
            setButton(true)
        }
    }

    useEffect(() => {
    showButton()
    }, [])

    window.addEventListener('resize',
    showButton)

    return (
        <>
        <IconContext.Provider value={{ color : '#242424'}}>
            <section className="main">
            <nav className="navbar">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <VscGlobe className='navbar-icon'/>
                        AsesoriaEduc
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/team' className="nav-links" onClick={closeMobileMenu}>
                                Equipo profesional
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/coaching' className="nav-links" onClick={closeMobileMenu}>
                                Coaching
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/curses' className="nav-links" onClick={closeMobileMenu}>
                                Diplomados y cursos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/asesorias' className="nav-links" onClick={closeMobileMenu}>
                                Asesorias
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                Contacto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/resources' className="nav-links" onClick={closeMobileMenu}>
                                Recursos
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className="btn-link">
                                    <Button buttonStyle='btn--outline'>Registrarse
                                    </Button>
                                </Link>
                            ) : (
                                <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                    buttonSize='btn-mobile'>
                                        Registrarse
                                    </Button>
                                </Link>
                            )}
                        </li>
                    </ul>
            </nav>
            </section>
            </IconContext.Provider>
        </>
    )
}
 
export default Navbar
