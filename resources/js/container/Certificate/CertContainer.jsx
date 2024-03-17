import React, {useState, useEffect} from 'react';
import Brand from '../../components/Brand/Brand.jsx';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Swiper, { SwiperSlide } from "../../components/swiper";
import PropTypes from "prop-types";

const CertContainer = ({ classOption }) => {

    const [brnData, setbrnData] = useState([]);
    const [titData, settitData] = useState([]);
    var lang = localStorage.getItem('lang');

    const fetchbrnData = async() => {
        return await fetch("https://backend.genesis-bd.com/api/cert")
            .then((response) => response.json())
            .then((data) => {
                setbrnData(data);
            });
    }

    var url = `https://backend.genesis-bd.com/api/settings/10-${lang}`;

    const fetchtitData = async() => {
        return await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                settitData(data);
            });
    }

    useEffect(() => {
        setTimeout(() => {
            fetchtitData();
            fetchbrnData();
        }, 4000);
    },[]);

    const sliderOptions = {
        spaceBetween: 30,
        slidesPerView: 4,
        loop: true,
        breakpoints: {
            1200:{
                slidesPerView : 4
            },
            992:{
                slidesPerView : 4
            },
            768:{
                slidesPerView : 4

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
                    title={titData.value}
                />
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <div className="brand-wrapper">
                            <div className="brand-list">
                                <Swiper className="brand-carousel" options={sliderOptions}>
                                    {brnData &&
                                        brnData.map((single, id) => {
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
