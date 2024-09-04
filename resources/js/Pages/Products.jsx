import React, { useEffect } from "react";
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next'; 
import Header from '../partials/header/Header';
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AOS from 'aos';
import Category from "../container/Category/Category";

//image
import coverImg from '../assets/images/cover/1671540679.webp';

const Products = () => {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init();
    })
    return(
       <React.Fragment>
            <SEO title="Genesis - Product Categories" />
            <Header/>
            <Breadcrumb 
                image={coverImg}
                title={t('productHeader')}
                content={t('home')}
                contentTwo={t('products')}
                color = "#000000"
            />
            
            <Category/>

            <Footer/>
            <ScrollToTop/>
       </React.Fragment>
    )
}

export default Products