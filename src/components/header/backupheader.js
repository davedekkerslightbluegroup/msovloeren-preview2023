
import logo from '../../images/logo-mso.jpg';
import './header.css';
//import { Link } from 'react-router-dom';


function Header() {
    return (
        <header id="topnav" className="defaultscroll sticky-bar bg-white ">
        <Navbar bg="light" expand="lg"></Navbar>
            <div className="container">
                <a className="logo" href="index.html">
                    <img src={logo} height="50" className="logo-light-mode" alt="" />
                </a>
                <div className="menu-extras">
                    <div className="menu-item">
                        <a className="navbar-toggle " id="isToggle" onclick="toggleMenu()">
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="navigation">
                    <ul className="navigation-menu">
                        <li className="has-submenu parent-menu-item">
                            <a href="">Vloeren</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="vloeren.html" className="sub-menu-item">Overzicht</a></li>
                                <li><a href="vloeren.html" className="sub-menu-item">Harde vloeren</a></li>
                                <li><a href="vloeren.html" className="sub-menu-item">Flexibele vloeren</a></li>
                                <li><a href="vloeren.html" className="sub-menu-item">Zachte vloeren</a></li>
                            </ul>
                        </li>
                        <li className="has-submenu parent-menu-item">
                            <a href="">Exclusief</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="vloeren.html" className="sub-menu-item">Overzicht</a></li>
                                <li><a href="vloeren.html" className="sub-menu-item">.... vloeren</a></li>
                                <li><a href="vloeren.html" className="sub-menu-item">.... vloeren</a></li>
                                <li><a href="vloeren.html" className="sub-menu-item">.... vloeren</a></li>
                            </ul>
                        </li>
                        <li className="has-submenu parent-menu-item">
                            <a href="">Behandelingen</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="vloeren.html" className="sub-menu-item">Overzicht</a></li>
                                <li><a href="vloeren.html" className="sub-menu-item">.... method</a></li>
                                <li><a href="vloeren.html" className="sub-menu-item">.... method</a></li>
                                <li><a href="vloeren.html" className="sub-menu-item">.... method</a></li>
                            </ul>
                        </li>
                        <li><a href="../about/about.js" className="sub-menu-item">Over MSO</a></li>
                        <li><a href="contact.html" className="sub-menu-item">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;