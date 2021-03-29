import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import {  FaBars, FaTimes} from 'react-icons/fa'
import { Button } from '../../components'
import './navbar.css'


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

    window.addEventListener('resize',
    showButton)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                        <MdFingerprint className='navbar-icon' />
                        AsesoriaEduc
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/team' className="nav-links">
                                Equipo profesional
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/coaching' className="nav-links">
                                Coaching
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/curses' className="nav-links">
                                Diplomados y cursos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/asesorias' className="nav-links">
                                Asesorias
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-links">
                                Contacto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/resources' className="nav-links">
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
                                <Link to='/sign-up' className="btn-link">
                                    <Button buttonStyle='btn--outline'
                                    buttonSize='btn-mobile'>
                                        Registrarse
                                    </Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
 
export default Navbar
