import React, { useEffect } from "react";
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next'; 
import Header from '../partials/header/Header';
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AOS from 'aos';

//image
import coverImg from '../assets/images/cover/1672227217.webp';
import ContactInformationTwo from "../container/ContactInformation/ContactInformationTwo";
import ContactFromContainer from "../container/ContactFromContainer/ContactFromContainer";

const Contact = () => {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init();
    })
    return(
       <React.Fragment>
            <SEO title="Genesis - Contact Us" />
            <Header/>
            <Breadcrumb 
                image={coverImg}
                title={t('contact')}
                content={t('home')}
                contentTwo={t('contact')}
                color = "#ffffff"
            />
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <ContactInformationTwo/>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <ContactFromContainer/>
                    </div>
                </div>
            </div>

            <Footer/>
            <ScrollToTop/>
       </React.Fragment>
    )
}

export default Contact