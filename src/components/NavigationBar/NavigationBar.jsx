import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import "./NavigationBar.scss"

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function menuHandler() {
        setIsMenuOpen(!isMenuOpen);
    }
    function mobileHandler() {
        const menu = document.getElementById("nav");
        if (isMenuOpen) {
            // Remove the "activeMenu" class from the anchor's classList
            menu.classList.remove("activeMenu");
            setIsMenuOpen(!isMenuOpen);
        }
    }

    return (
        <header className={`header ${isMenuOpen ? 'activeMenu' : ''}`} id="nav">
            <div className="headerMain">
                <Link to="/" className="logo" title="Mergi la pagina principală" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                    <img src={logo} alt="Logo" />
                </Link>
                <button className="menuTrigger" onClick={menuHandler}>
                    <span className="icon iconHamburger">
                        <span className="hamburgerBar hamburgerBar1">&nbsp;</span>
                        <span className="hamburgerBar hamburgerBar2">&nbsp;</span>
                        <span className="hamburgerBar hamburgerBar3">&nbsp;</span>
                    </span>
                    <span className="SROnly">Deschide meniul principal</span>
                </button>
                <nav className="mainMenu">
                    <ul className="mainMenuList">
                        <li className="mainMenuItem">
                            <Link className="mainMenuLink active" to="/" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                                <span className="linkText">Acasă</span>
                            </Link>
                        </li>
                        <li className="mainMenuItem">
                            <a href="#" className="mainMenuLink">
                                <span className="linkText">Blog</span>
                            </a>
                        </li>
                        <li className="mainMenuItem">
                            <HashLink className="mainMenuLink" to="/#about" onClick={mobileHandler}>
                                <span className="linkText">Despre Noi</span>
                            </HashLink>
                        </li>
                        <li className="mainMenuItem">
                            <Link className="mainMenuLink" to="/medici" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                                <span className="linkText">Medici</span>
                            </Link>
                        </li>
                        <li className="mainMenuItem">
                            <HashLink className="mainMenuLink" to="/#contact" onClick={mobileHandler}>
                                <span className="linkText">Contact</span>
                            </HashLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}