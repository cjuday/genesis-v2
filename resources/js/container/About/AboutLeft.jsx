import React, {useState} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';

const AboutLeft = ({ title, description, img1, img2 }) => {
    const [scale] = useState(1.04);
    return (
        <div className="section section-padding-top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-12" data-aos="fade-up">
                        <div className="about-content-area mt-0 mb-md-10 mb-10">
                            <SectionTitleTwo 
                                title={title}
                            />
                            <div className="row row-cols-auto mb-3">
                                <span style={{ textAlign: 'justify' }}><p>{description}</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area about-shape-animation right-0 me-0">
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={img2} alt="Alt Image 2" />
                                </Tilt>
                            </div>
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={img1} alt="Alt Image 1" />
                                </Tilt>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutLeft;