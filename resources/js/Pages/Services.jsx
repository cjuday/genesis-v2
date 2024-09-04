import React, { useEffect } from "react";
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next'; 
import Header from '../partials/header/Header';
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import AboutLeft from "../container/About/AboutLeft";
import AboutRight from "../container/About/AboutRight";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ServiceList from "../container/Services/ServiceList";
import AOS from 'aos';

//image
import coverImg from '../assets/images/cover/1672054787.webp';

const Services = () => {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init();
    })
    return(
       <React.Fragment>
            <SEO title="Genesis - Our Services" />
            <Header/>
            <Breadcrumb 
                image={coverImg}
                title={t('services')}
                content={t('home')}
                contentTwo={t('services')}
                color = "#ffffff"
            />
            
            <ServiceList/>

            <Footer/>
            <ScrollToTop/>
       </React.Fragment>
    )
}

export default Services