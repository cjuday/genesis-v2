import React, { useEffect, useRef } from 'react';
import { router } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'bootstrap'; // Import Bootstrap's JS
import France from '../../assets/images/flags/france.png';
import UK from '../../assets/images/flags/united-kingdom.png';
import Germany from '../../assets/images/flags/germany.png';
import Spain from '../../assets/images/flags/spain.png';
import Italy from '../../assets/images/flags/italy.png';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null); // Reference to the dropdown

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  useEffect(() => {
    localStorage.setItem('language', i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lang, e) => {
    e.preventDefault();
    i18n.changeLanguage(lang);

    // Use Bootstrap's dropdown instance to hide the dropdown
    const dropdownElement = dropdownRef.current;
    const dropdown = Dropdown.getOrCreateInstance(dropdownElement); // Get or create the dropdown instance
    dropdown.hide(); // Manually hide the dropdown
  };

  const languages = [
    { code: 'en', label: t('english'), flag: UK },
    { code: 'fr', label: t('french'), flag: France },
    { code: 'es', label: t('spanish'), flag: Spain },
    { code: 'de', label: t('german'), flag: Germany },
    { code: 'it', label: t('italian'), flag: Italy }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language);

  return (
    <nav className="site-main-menu">
      <ul>
        <li><a href="/"><span className="menu-text">{t('home')}</span></a></li>
        <li><a href="/about"><span className="menu-text">{t('about')}</span></a></li>
        <li><a href="/services"><span className="menu-text">{t('services')}</span></a></li>
        <li><a href="/products"><span className="menu-text">{t('products')}</span></a></li>
        <li><a href="/contact"><span className="menu-text">{t('contact')}</span></a></li>
        <li className="nav-item dropdown" ref={dropdownRef}>
          <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={currentLanguage.flag} className="flag" alt={`${currentLanguage.label} flag`} /> {currentLanguage.label}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {languages.filter(lang => lang.code !== i18n.language).map((lang) => (
              <li key={lang.code}>
                <a href="#" className="dropdown-item langli" onClick={(e) => changeLanguage(lang.code, e)}>
                  <img src={lang.flag} className="flag" alt={`${lang.label} flag`} /> {lang.label}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
