import React from 'react';

const MobileNavMenu = () => {
    return (
        <nav className="site-mobile-menu">
            <ul>
                <li>
                    <a href={"/"}><span className="menu-text">Home</span></a>
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
            </ul>
        </nav>
    )
}

export default MobileNavMenu;
