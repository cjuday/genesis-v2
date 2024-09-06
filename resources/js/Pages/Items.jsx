import React, { useState, useEffect } from "react";
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next'; 
import Header from '../partials/header/Header';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AOS from 'aos';

const Items = ({products, appUrl, classOption="text-lg-center text-center mb-lg-13 mb-md-13 mb-6"}) => {
    console.log(products);
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
            'All',
            'T-shirts',
            'Polo',
            'Bottom',
            'Shirts',
            'Sweat_Shirts',
            'Trousers',
            'Sweaters',
            'Jacket'
        ];
    }else if(category==="Women") {
        categories = [
            'All',
            'Tops',
            'Bottoms'
        ];
    }else if(category==="Kid") {
        categories = [
            'All',
            'T&T',
            'S&S',
            'Trousers',
            'Jeans',
            'Shorts'
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
                            <button id={cat} className={active === cat ? 'is-checked' : ''}><span className="filter-text">{t(cat)}</span></button>
                        </a>
                    )}
                </div>

                <div className="container-fluid">
                {products.total > 0 ? (
                    <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1 pt-6 text-center">
                        {products.data.map((product) => (
                            <div key={product.id} className="col mb-6" data-aos="fade-up" data-aos-delay="300">
                                <img src={appUrl + product.image_url} className="prod-img" alt="Product Image" />
                            </div> 
                        ))}
                    </div>
                ) : (
                    <div className="text-center section-padding-bottom-200 pt-20">
                        <h3>No products available at the moment.</h3>
                    </div>
                )}
                </div>
            </div>

            {products.links.length > 3 ? (
                    <div className="row mb-5">
                        <div className="col">
                            <ul className="pagination center">
                                {products.prev_page_url && (
                                    <li>
                                        <a href={products.prev_page_url}>
                                            <i className="fa fa-angle-left"/>
                                        </a>
                                    </li>
                                )}
                                {products.links
                                .filter((link) => link.label !== '&laquo; Previous' && link.label !== 'Next &raquo;')
                                .map((link, index) => (
                                    <li>
                                        <a
                                            key={index}
                                            className={link.active ? 'active' : ''}
                                            href={link.url}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                                {products.next_page_url && (
                                    <li>
                                        <a href={products.next_page_url}>
                                            <i className="fa fa-angle-right"/>
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                ) : ''
            }

            <Footer/>
            <ScrollToTop/>
       </React.Fragment>
    )
}

export default Items