import PropTypes from "prop-types";
import React from 'react';
import { useTranslation } from "react-i18next";
import Brand from '../../components/Brand/Brand.jsx';
import Swiper, { SwiperSlide } from "../../components/swiper/index.jsx";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo.jsx";

//images
import img1 from '../../assets/images/brands/1.webp';
import img2 from '../../assets/images/brands/2.webp';
import img3 from '../../assets/images/brands/3.webp';
import img4 from '../../assets/images/brands/4.webp';
import img5 from '../../assets/images/brands/5.webp';
import img6 from '../../assets/images/brands/6.webp';

const BrandContainer = ({ classOption="brand-section section" }) => {
    const { t } = useTranslation();

    const data = [img1, img2, img3, img4, img5, img6];
    
    const sliderOptions = {
        spaceBetween: 30,
        slidesPerView: 6,
        loop: true,
        breakpoints: {
            1200:{
                slidesPerView : 6
            },
            992:{
                slidesPerView : 5
            },
            768:{
                slidesPerView : 5

            },
            576:{
                slidesPerView : 4
            },
            320:{
                slidesPerView : 2
            }
        }
    }
    return (
        <div className={`brand-section section ${classOption}`}>
            <div className="container">
            <SectionTitleTwo
                    title={t('clientsHeader')}
                />
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <div className="brand-wrapper">
                            <div className="brand-list">
                                <Swiper className="brand-carousel" options={sliderOptions}>
                                    {data &&
                                        data.map((single, id) => {
                                            return(
                                                <SwiperSlide key={id}>
                                                    <Brand data={single} key={id} />
                                                </SwiperSlide>
                                            ); 
                                    })}
                                        
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

BrandContainer.propTypes = {
    classOption: PropTypes.string
};

export default BrandContainer;
