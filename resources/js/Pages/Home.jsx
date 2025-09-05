import React, { useEffect } from "react";
import SEO from '../components/SEO';
import Header from '../partials/header/Header';
import IntroSlider from "../container/IntroSlider/IntroSlider";
import HomeAbout from '../components/About/HomeAbout';
import BrandContainer from "../container/Brand/BrandContainer";
import CertContainer from "../container/Certificate/CertContainer";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
     useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                throttleDelay: 99,
                debounceDelay: 50,
                once: true, // animate only once
            });
        });
    }, []);

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