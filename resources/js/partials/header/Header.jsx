import React, { Fragment, useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Logo from '../../components/logo/Logo';
import NavBar from '../../components/NavBar/NavBar';
import MobileMenu from "../../components/NavBar/MobileMenu";
import France from '../../assets/images/flags/france.png';
import UK from '../../assets/images/flags/united-kingdom.png';
import Germany from '../../assets/images/flags/germany.png';
import Spain from '../../assets/images/flags/spain.png';
import Italy from '../../assets/images/flags/italy.png';
import LogoImg from '../../assets/images/logo/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation(); // Destructure t and i18n
  const [ofcanvasShow, setOffcanvasShow] = useState(false);

  useEffect(() => {
    // Load language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  useEffect(() => {
    // Update localStorage whenever language changes
    localStorage.setItem('language', i18n.language);
  }, [i18n.language]);

  const onCanvasHandler = () => {
    setOffcanvasShow(prev => !prev);
  };

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".header-section");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Fragment>
      <div className={`header-section header-transparent sticky-header section ${scroll > headerTop ? "is-sticky" : ""}`}>
        <div className="header-inner">
          <div className="container-fluid position-relative navx">
            <div className="footer-widget-content">
              <div className="row pe-3">
                <div className="col-7 pr1">
                  <i className="fa-solid fa-location-dot"></i> Dhaka, Bangladesh.
                </div>
                <div className="col-5 pr2">
                  <i className="fa-solid fa-phone"></i> 880251040131
                </div>
              </div>
            </div>
            <hr id='navx' />
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-2 col-auto order-0">
                <Logo image={LogoImg} />
              </div>
              <div className="col-auto col-xl d-flex align-items-right justify-content-xl-right justify-content-end order-2 order-xl-1">
                <div className="menu-column-area d-none d-xl-block position-static">
                  <NavBar />
                </div>

                <ul className="header-mobile-menu-toggle d-xl-none ms-sm-2">
                  <li className="nav-item dropdown langli">
                    <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {i18n.language === 'en' && <><img src={UK} className="flag" alt="flag" /> EN</>}
                      {i18n.language === 'fr' && <><img src={France} className="flag" alt="flag" /> FR</>}
                      {i18n.language === 'es' && <><img src={Spain} className="flag" alt="flag" /> ES</>}
                      {i18n.language === 'de' && <><img src={Germany} className="flag" alt="flag" /> DE</>}
                      {i18n.language === 'it' && <><img src={Italy} className="flag" alt="flag" /> IT</>}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      {i18n.language !== 'en' && (
                        <li><a href="#" className="dropdown-item langli" onClick={(e) => { e.preventDefault(); changeLanguage('en'); }}><img src={UK} className="flag" alt="flag" /> EN</a></li>
                      )}
                      {i18n.language !== 'fr' && (
                        <li><a href="#" className="dropdown-item langli" onClick={(e) => { e.preventDefault(); changeLanguage('fr'); }}><img src={France} className="flag" alt="flag" /> FR</a></li>
                      )}
                      {i18n.language !== 'es' && (
                        <li><a href="#" className="dropdown-item langli" onClick={(e) => { e.preventDefault(); changeLanguage('es'); }}><img src={Spain} className="flag" alt="flag" /> ES</a></li>
                      )}
                      {i18n.language !== 'de' && (
                        <li><a href="#" className="dropdown-item langli" onClick={(e) => { e.preventDefault(); changeLanguage('de'); }}><img src={Germany} className="flag" alt="flag" /> DE</a></li>
                      )}
                      {i18n.language !== 'it' && (
                        <li><a href="#" className="dropdown-item langli" onClick={(e) => { e.preventDefault(); changeLanguage('it'); }}><img src={Italy} className="flag" alt="flag" /> IT</a></li>
                      )}
                    </ul>
                  </li>
                  <button type="button" aria-label="toggler" className="toggle mob" onClick={onCanvasHandler}>
                    <i className="icon-top"></i>
                    <i className="icon-middle"></i>
                    <i className="icon-bottom"></i>
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </Fragment>
  );
};

export default Header;
