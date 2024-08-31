import PropTypes from "prop-types";
import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Brand from '../../components/Brand/Brand.jsx';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Swiper, { SwiperSlide } from "../../components/swiper";

const CertContainer = ({ data, classOption }) => {
    const { t } = useTranslation(); // Destructure t from useTranslation

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
                    title={t('certificateHeader')}
                />
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <div className="brand-wrapper">
                            <div className="brand-list">
                                <Swiper className="brand-carousel" options={sliderOptions}>
                                    {data &&
                                        data.map((single, id) => {
                                            return(
                                                <SwiperSlide key={id} className="cert">
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

CertContainer.propTypes = {
    classOption: PropTypes.string
};
CertContainer.defaultProps = {
    classOption: "brand-section section"
};

export default CertContainer;
