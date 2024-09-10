import PropTypes from "prop-types";
import React , {useState, useEffect} from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import ServBox from "./ServBox";
import { useTranslation } from "react-i18next";

//images
import img1 from '../../assets/images/services/1.png';
import img2 from '../../assets/images/services/2.png';
import img3 from '../../assets/images/services/3.png';
import img4 from '../../assets/images/services/4.png';
import img5 from '../../assets/images/services/1671453545.png';
import img6 from '../../assets/images/services/7.png';
import img7 from '../../assets/images/services/8.png';
import img8 from '../../assets/images/services/9.png';
import img9 from '../../assets/images/services/1671858909.png';

const ServiceList = () => {
    const { t } = useTranslation();

    const img = 
    [
        {
          img: img1,
          txt: t('serviceDetails1')
        },
        {
          img: img2,
          txt: t('serviceDetails2')
        },
        {
          img: img3,
          txt: t('serviceDetails3')
        },
        {
          img: img4,
          txt: t('serviceDetails4')
        },
        {
          img: img5,
          txt: t('serviceDetails5')
        },
        {
          img: img6,
          txt: t('serviceDetails6')
        },
        {
          img: img7,
          txt: t('serviceDetails7')
        },
        {
          img: img8,
          txt: t('serviceDetails8')
        },
        {
          img: img9,
          txt: t('serviceDetails9')
        }
    ];

      
    return (
        <div className={`section section-padding-t90-b100 box-border text-center bg-color-1`}>
            <div className="container">

                <SectionTitle
                    title="Our Services"
                />
                
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-6">

                    {img && img.map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <ServBox classOption="box-border" data={single} key={key} />
                                </div>
                            ); 
                    })}
                </div>

            </div>
        </div>
    )
}

ServiceList.propTypes = {
    classOption: PropTypes.string
};

export default ServiceList;
