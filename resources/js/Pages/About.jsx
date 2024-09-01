import React, { useEffect } from "react";
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next'; 
import Header from '../partials/header/Header';
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import AboutLeft from "../container/About/AboutLeft";
import AboutRight from "../container/About/AboutRight";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import coverImg from '../assets/images/cover/1671372961.webp';
import AOS from 'aos';

//about left images
import img1 from '../assets/images/about/1671519040.webp';
import img2 from '../assets/images/about/1671519096.webp';
import img3 from '../assets/images/about/5.webp';
import img4 from '../assets/images/about/6.webp';

//about right images
import imgr1 from '../assets/images/about/3.webp';
import imgr2 from '../assets/images/about/1671427463.webp';
import imgr3 from '../assets/images/about/1670854665.webp';
import imgr4 from '../assets/images/about/1670854721.webp';

const About = () => {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init();
    })
    return(
       <React.Fragment>
            <SEO title="Genesis - About Us" />
            <Header/>
            <Breadcrumb 
                image={coverImg}
                title={t('aboutTitle')}
                content={t('home')}
                contentTwo={t('about')}
                color = "#ffffff"
            />
            
            <AboutLeft
                title={t('whoWeAreTitle')}
                description={t('whoWeAre')}
                img1={img1}
                img2={img2}
            />
            
            <AboutRight
                title={t('ourVisionTitle')}
                description={t('ourVision')}
                img1={imgr1}
                img2={imgr2}
            />

            <AboutLeft
                title={t('ourMissionTitle')}
                description={t('ourMission')}
                img1={img3}
                img2={img4}
            />
            
            <AboutRight
                title={t('valueTitle')}
                description={t('valueMsg')}
                img1={imgr3}
                img2={imgr4}
            />

            <Footer/>
            <ScrollToTop/>
       </React.Fragment>
    )
}

export default About