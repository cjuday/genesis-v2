import React, { useEffect } from "react";
import SEO from '../components/SEO';
import Header from '../partials/header/Header';
import HomeAbout from '../components/About/HomeAbout';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../container/Footer/Footer'
import ServiceIconBox from '../container/service/ServiceIconBox';
import AOS from 'aos';

const Certificate = React.lazy(() => import('../container/Certificate/CertContainer'));


const Home = ({about, certificates}) => {
    useEffect(() => {
        AOS.init();
    })
    return(
       <React.Fragment>
            <SEO title="Genesis - One Stop Business Soulution in Bangladesh" />
            <Header/>
            <HomeAbout data={about}/>  
            <Certificate data={certificates}/>  
            <Footer/>
            <ScrollToTop/>
       </React.Fragment>
    )
}

export default Home