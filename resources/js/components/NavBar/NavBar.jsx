import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { useTranslation } from 'react-i18next'; 
import France from '../../assets/images/flags/france.png';
import UK from '../../assets/images/flags/united-kingdom.png';
import Germany from '../../assets/images/flags/germany.png';
import Spain from '../../assets/images/flags/spain.png';
import Italy from '../../assets/images/flags/italy.png';

const NavBar = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Load language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  useEffect(() => {
    // Update localStorage whenever language changes
    localStorage.setItem('language', i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    router.post('/change-language', { language: lang });
  };

  return (
    <nav className="site-main-menu">
      <ul>
        <li>
          <a href="/"><span className="menu-text">{t('home')}</span></a>
        </li>
        <li>
          <a href={"/about"}><span className="menu-text">{t('about')}</span></a>
        </li>
        <li>
          <a href={"/products"}><span className="menu-text">{t('products')}</span></a>
        </li>
        <li>
          <a href={"/contact"}><span className="menu-text">{t('contact')}</span></a>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {i18n.language === 'en' && <><img src={UK} className="flag" /> {t('english')}</>}
            {i18n.language === 'fr' && <><img src={France} className="flag" /> {t('french')}</>}
            {i18n.language === 'es' && <><img src={Spain} className="flag" /> {t('spanish')}</>}
            {i18n.language === 'de' && <><img src={Germany} className="flag" /> {t('german')}</>}
            {i18n.language === 'it' && <><img src={Italy} className="flag" /> {t('italian')}</>}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {i18n.language !== 'en' && (
              <li><a href="#" className="dropdown-item langli" onClick={(e) => { e.preventDefault(); changeLanguage('en'); }}><img src={UK} className="flag" /> {t('english')}</a></li>
            )}
            {i18n.language !== 'fr' && (
              <li><a href="#" className="dropdown-item langli" onClick={(e) => { e.preventDefault(); changeLanguage('fr'); }}><img src={France} className="flag" /> {t('french')}</a></li>
            )}
            {i18n.language !== 'es' && (
              <li><a href="#" className="dropdown-item langli" onClick={(e) => { e.preventDefault(); changeLanguage('es'); }}><img src={Spain} className="flag" /> {t('spanish')}</a></li>
            )}
            {i18n.language !== 'de' && (
              <li><a href="#" className="dropdown-item langli" onClick={(e) => { e.preventDefault(); changeLanguage('de'); }}><img src={Germany} className="flag" /> {t('german')}</a></li>
            )}
            {i18n.language !== 'it' && (
              <li><a href="#" className="dropdown-item langli" onClick={(e) => { e.preventDefault(); changeLanguage('it'); }}><img src={Italy} className="flag" /> {t('italian')}</a></li>
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
