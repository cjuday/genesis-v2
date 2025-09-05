import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Brand from '../../components/Brand/Brand.jsx';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Swiper, { SwiperSlide } from "../../components/swiper";

//images
import img1 from '../../assets/images/certs/1671859315.webp';
import img2 from '../../assets/images/certs/1671944243.webp';
import img3 from '../../assets/images/certs/1671944421.webp';
import img4 from '../../assets/images/certs/1671946652.webp';
import img5 from '../../assets/images/certs/1671946883.webp';
import img6 from '../../assets/images/certs/1671946894.webp';
import img7 from '../../assets/images/certs/1671947178.webp';

const CertContainer = ({classOption="brand-section section" }) => {
    const { t } = useTranslation();

    const data = [img1, img2, img3, img4, img5, img6, img7];

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

export default CertContainer;
