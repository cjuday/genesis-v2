import React from 'react'
import France from '../../assets/images/flags/france.png';
import UK from '../../assets/images/flags/united-kingdom.png';
import Germany from '../../assets/images/flags/germany.png';
import Spain from '../../assets/images/flags/spain.png';
import Italy from '../../assets/images/flags/italy.png';


const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                <li>
                    <a href="/"><span className="menu-text">Home</span></a>
                </li>
                <li>
                    <a href={"/about"}><span className="menu-text">About Us</span></a>
                </li>
                <li>
                    <a href={"/products"}><span className="menu-text">Products</span></a>
                </li>
                <li>
                    <a href={"/contact"}><span className="menu-text">Contact Us</span></a>
                </li>
                <li className="nav-item dropdown">
                    <a href="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={UK} className="flag"/> English
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a href="/" className="dropdown-item langli"><img src={France} className="flag"/> French</a></li>
                        <li><a href="/" className="dropdown-item langli"><img src={Spain} className="flag"/> Spanish</a></li>
                        <li><a href="/" className="dropdown-item langli"><img src={Germany} className="flag"/> German</a></li>
                        <li><a href="/" className="dropdown-item langli"><img src={Italy} className="flag"/> Italian</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
