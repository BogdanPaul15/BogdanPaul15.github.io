import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import logoWhite from '../../assets/images/footer_logo-2.png'
import "./FooterBar.scss"

export default function FooterBar() {
    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="footerContent">
                    <Link to="/" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                        <img src={logoWhite} className="footerLogo" alt="Logo" />
                    </Link>
                    <ul className="footerMenu">
                        <li className="footerItem">
                            <Link to="/" className="footerLink" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>Acasă</Link>
                        </li>
                        <li className="footerItem">
                            <Link to="#" className="footerLink">Blog</Link>
                        </li>
                        <li className="footerItem">
                            <HashLink className="footerLink" to="/#about">Despre Noi</HashLink>
                        </li>
                        <li className="footerItem">
                            <Link to="/medici" className="footerLink" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>Medici</Link>
                        </li>
                        <li className="footerItem">
                            <HashLink className="footerLink" to="/#contact">Contact</HashLink>
                        </li>
                    </ul>
                    <ul className="footerIcons">
                        <li className="footerIconsItem">
                            <a href="#" className="footerIconsLink" aria-label="Link Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FDFDFD" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                            </a>
                        </li>
                        <li className="footerIconsItem">
                            <a href="#" className="footerIconsLink" aria-label="Link Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FDFDFD" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footerMeta">
                    <ul className="footerList">
                        <li className="footerItem">
                            <a href="#" className="footerLink">Politica de confidențialitate</a>
                        </li>
                        <li className="footerItem">
                            <a href="#" className="footerLink">Politica de cookies</a>
                        </li>
                    </ul>
                    <p className="copyrightTerms">© 2023 Medici români. Toate drepturile rezervate. Powered by bogdanpaul.com</p>
                </div>
            </div>
        </footer>
    )
}