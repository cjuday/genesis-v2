import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import { useTranslation } from "react-i18next";

//images
import img1 from '../../assets/images/category/1671598701.jpg';
import img2 from '../../assets/images/category/1671598800.jpg';
import img3 from '../../assets/images/category/1671598856.jpg';

const Category = ({ classOption="brand-section section section-padding-bottom" }) => {
    const { t } = useTranslation();

    const data = [
        {
            img: img1,
            txt: t('men')
        },
        {
            img: img2,
            txt: t('women')
        },
        {
            img: img3,
            txt: t('kid')
        }
    ]
    

    return (
        <div className={`brand-section section ${classOption}`}>
            <div className="container text-center pt-10">
            <SectionTitle
                    title="Product Categories"
                />
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 pt-6">
                    {data && data.map((data) => {
                        return(
                            <div key={data.txt} className="col mb-6 cat-image" data-aos="fade-up" data-aos-delay="300">
                                <a href={`/products/${data.txt}/All`}>
                                    <img src={data.img} className="cats-img"/>
                                    <div className="content">
                                        {data.txt}
                                    </div>
                                </a>
                            </div>
                        ); 
                    })}
                </div>
            </div>
        </div>
    )
}

export default Category;
