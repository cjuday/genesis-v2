import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from "../../../utils";

const MobileNavMenu = () => {
    const { t } = useTranslation(); // Destructure t from useTranslation

    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-toggle") ||
            target.classList.contains("menu-toggle")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };


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
                <li className="has-children">
                    <a href={"/products"}><span className="menu-text">{t('products')}</span></a>
                    <span className="menu-toggle" onClick={onClickHandler}>
                        <i className="icon fa fa-caret-down"/>
                    </span>
                    <ul className="sub-menu" aria-labelledby="navbarDropdownMenuLink1">
                        <li> 
                            <a href="/products/Men/All" className="dropdown-item langli">
                                <span className="text-white">{t('men')}</span>
                            </a>
                        </li>
                        <li> 
                            <a href="/products/Women/All" className="dropdown-item langli">
                                <span className="text-white">{t('women')}</span>
                            </a>
                        </li>
                        <li> 
                            <a href="/products/Kid/All" className="dropdown-item langli">
                                <span className="text-white">{t('kid')}</span>'
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href={"/contact"}><span className="menu-text">{t('contact')}</span></a>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavMenu;
