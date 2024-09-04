import React from 'react';
import Intro from '../../components/Intro/Intro.jsx';
import SwiperSlider, {SwiperSlide} from "../../components/swiper";
import { useTranslation } from "react-i18next";

//images
import img1 from '../../assets/images/slider/1672228480.webp';
import img2 from '../../assets/images/slider/1672227279.webp';
import img3 from '../../assets/images/slider/1672054675.webp';

const IntroSlider = () => {
    const { t } = useTranslation();
    const data = [
        {
            img: img1,
            title: t('slider1title1'),
            title_2: t('slider1title2'),
            title_3: '',
            title_4: '',
            text_align: 'left',
            color: 'white'
        },
        {
            img: img2,
            title: t('slider2title1'),
            title_2: t('slider2title2'),
            title_3: '',
            title_4: '',
            text_align: 'left',
            color: 'black'
        },
        {
            img: img3,
            title: t('slider3title1'),
            title_2: t('slider3title2'),
            title_3: t('slider3title3'),
            title_4: t('slider3title4'),
            text_align: 'end',
            color: 'black'
        }
    ]
    const swiperOption = {
        initialSlide: "1",
        loop: true,
        speed: 750,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: true,
    }

    return (
        <div className="intro-slider-wrap section">
            <SwiperSlider effect="fade" className="intro-slider" options={swiperOption}>
                {data &&
                    data.map((single, id) => {
                        return(
                            <SwiperSlide key={id}>
                                <Intro data={single} key={id} />
                            </SwiperSlide>
                        ); 
                    })}
            </SwiperSlider>
        </div>
    )
}

export default IntroSlider
