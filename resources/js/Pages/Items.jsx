import React, { useState, useEffect } from "react";
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next'; 
import Header from '../partials/header/Header';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AOS from 'aos';

const Items = ({classOption="text-lg-center text-center mb-lg-13 mb-md-13 mb-6"}) => {
    const { t } = useTranslation();
    const url = new URL(window.location.href);
    const pathParts = url.pathname.split('/').filter(part => part);
    const category = pathParts[1];
    const selection = pathParts[2];
    let categories = []; 
    const [active, setActive] = useState(selection);

    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if(category==="Men") {
        categories = [
            t('All'),
            t('T-shirts'),
            t('Polo'),
            t('Bottom'),
            t('Shirts'),
            t('Sweat_Shirts'),
            t('Trousers'),
            t('Sweaters'),
            t('Jacket')
        ];
    }
    useEffect(() => {
        AOS.init();
    })
    return(
       <React.Fragment>
            <SEO title={`Genesis - Products for ${category}`}/>
            <Header/>
            <div>
                <h2 className='title title text-center pt-3'>{t('for')} {Capitalize(category)}</h2>
                <div className={`messonry-button ${classOption}`}>
                    {categories.map((cat) => 
                        <a key={cat} href={`/products/${category}/${cat}`}>
                            <button id={cat} className={active === cat ? 'is-checked' : ''}><span className="filter-text">{cat}</span></button>
                        </a>
                    )}
                </div>

                {/* <ProductList/> */}
            </div>

            <Footer/>
            <ScrollToTop/>
       </React.Fragment>
    )
}

export default Items