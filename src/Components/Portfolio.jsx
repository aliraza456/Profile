
import React from 'react'
import './Portfolio.css';
import VR from '../img/VR.jpg';
import Bike from '../img/Bike.jpg';
import watch from '../img/watch.png';
import Perfume from '../img/Perfume.png';
import Idesign from '../img/Idesign.png';
import ATM from '../img/ATM.jpg';
import Secure from '../img/Secure.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import {themeContext} from '../Context';
import {useContext} from "react";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}

            <span style={{color:darkMode? 'white' : ''}} >Some UI/UX projects</span>
            <span>Portfolio</span>
            {/* slider */}
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
                // modules={[Pagination]}
                // slidesPerView={1}
                // pagination={{clickable: true}}
            >
                <SwiperSlide>
                    <img src={watch} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ATM} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Perfume} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Idesign} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Secure} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={VR} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Bike} alt='' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
};


export default Portfolio
