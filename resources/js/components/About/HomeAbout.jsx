import React, {useState, useEffect} from "react";
import SectionTitle from '../SectionTitles/SectionTitle';
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';

const HomeAbout = ({data}) => {
    const [scale] = useState(1.04);
    
    return (
        <div className="section section-padding-t90 section-padding-bottom-200 text-center">
            <div className="container">

                <SectionTitle
                    title="Welcome to Genesis-BD"
                    subTitle=""
                />

                <div className="row">

                    
                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="data-image-area">
                            <div className="data-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={data.img1}  alt={data.title} />
                                </Tilt>
                            </div>
                        
                            <div className="data-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={data.img2} alt={data.title} />
                                </Tilt>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="data-content-area">
                            <SectionTitleTwo 
                                subTitle="Every day brings new challenges"
                                title="About Our Company"
                            />

                            <p>{data.details}</p>

                            {/* <Link className="btn btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/data"}>data Us</Link> */}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeAbout;
