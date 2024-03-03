import React from "react";
import SEO from '../components/SEO';
import Header from '../partials/header/Header';
import Footer from '../container/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop';
import ServiceIconBox from '../container/service/ServiceIconBox';


const Home = () => {
    return(
       <React.Fragment>
            <SEO title="Genesis - One Stop Business Soulution in Bangladesh" />
            <Header/>
            <ServiceIconBox classOption="bg-color-1" />            
            <Footer/>
            <ScrollToTop/>
       </React.Fragment>
    )
}

export default Home