import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from '../SectionTitles/SectionTitle';
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';

//images
import img1 from "../../assets/images/about/1671523831.webp";
import img2 from "../../assets/images/about/1671523887.webp";

const HomeAbout = ({data}) => {
    const { t } = useTranslation();
    const [scale] = useState(1.04);
    
    return (
        <div className="section section-padding-t90 section-padding-bottom-2x text-center">
            <div className="container">

                <SectionTitle
                    title={t('welcome')}
                    subTitle=""
                />

                <div className="row">
                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={img1}  alt="Alt Image" />
                                </Tilt>
                            </div>
                        
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={img2} alt="Alt Image" />
                                </Tilt>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo 
                                subTitle=""
                                title={t('homeAboutHeader')}
                            />
                            <span style={{ textAlign: 'justify', lineHeight: '1.5' }}><p>{t('homeAbout')}</p></span>

                            <a className="btn btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4" href={"/contact"}>Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout;
