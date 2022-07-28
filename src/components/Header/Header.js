import React from 'react';
import './Scss/Header.scss';
import { BrowserRouter, Link, Switch, Route  } from 'react-router-dom';
import Img1 from './images/slider.png'
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

const Header = ({dataSlider, english, uzbek, russian}) => {

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };

    const {t} = useTranslation() 

    return (
        <div className='Header'>            
            <div className='wrapper'>
                <div className='carousel-slide'>
                    <Slider {...settings} className="slider">
                        {dataSlider.map((data) => {
                            return(
                                <div key={data.id} className='slider-page col-md-12'>
                                    <div className='body'>
                                        <img src={data.image} />
                                        <div className='col-6 title'>
                                            <h2>{uzbek && data.name_uz} {russian && data.name_ru} {english && data.name_en}</h2>
                                        </div>
                                        <div className='col-6 desc'>
                                            <p>{uzbek && data.description_uz} {russian && data.description_ru} {english && data.description_en}</p>
                                        </div>
                                        <div className='col-6 link'>
                                            <a href={data.url} className='nav-link shop'>{t("now")}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Header;