import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const MobileNavMenu = () => {
    const { t } = useTranslation(); // Destructure t from useTranslation

    return (
        <nav className="site-mobile-menu">
            <ul>
                <li>
                    <a href={"/"}><span className="menu-text">{t('home')}</span></a>
                </li>
                <li>
                    <a href={"/about"}><span className="menu-text">{t('about')}</span></a>
                </li>
                <li>
                    <a href={"/services"}><span className="menu-text">{t('services')}</span></a>
                </li>
                <li>
                    <a href={"/products"}><span className="menu-text">{t('products')}</span></a>
                </li>
                <li>
                    <a href={"/contact"}><span className="menu-text">{t('contact')}</span></a>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavMenu;
