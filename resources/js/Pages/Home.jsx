import React, { useEffect } from "react";
import SEO from '../components/SEO';
import Header from '../partials/header/Header';
import IntroSlider from "../container/IntroSlider/IntroSlider";
import HomeAbout from '../components/About/HomeAbout';
import BrandContainer from "../container/Brand/BrandContainer";
import CertContainer from "../container/Certificate/CertContainer";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AOS from 'aos';

const Home = () => {
    useEffect(() => {
        AOS.init();
    })
    return(
       <React.Fragment>
            <SEO title="Genesis - One Stop Business Soulution in Bangladesh" />
            <Header/>
            <IntroSlider/>
            <HomeAbout/> 
            <BrandContainer/> 
            <CertContainer/>  
            <Footer/>
            <ScrollToTop/>
       </React.Fragment>
    )
}

export default Home