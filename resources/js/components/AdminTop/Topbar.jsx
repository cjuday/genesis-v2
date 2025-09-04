import React from "react";
import { usePage, Link } from "@inertiajs/react";
import Logo from '../../assets/images/logo/logo.png';

function Topbar() {
    const { user } = usePage().props;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="topbar">
                <div className="container-fluid" id="topbar-container sidebar-toggle">
                    <img src={Logo} alt="logo" className="dark-logo" height="50px"/>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            Welcome, {user.name} | <Link href='/logout' as="button" method="post" className="logout"><i className="fa fa-right-from-bracket logout-icon" /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Topbar;