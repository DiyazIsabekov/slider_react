import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import nature1 from '../images/nature1.jpg'
import nature2 from '../images/nature2.jpeg'
import nature3 from '../images/nature3.jpg'
import nature4 from '../images/nature4.jpg'
import "./Slider.css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                spaceBetween={15}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img className='nature' src={nature1} alt="nature" /></SwiperSlide>
                <SwiperSlide><img className='nature' src={nature2} alt="nature" /></SwiperSlide>
                <SwiperSlide><img className='nature' src={nature3} alt="nature" /></SwiperSlide>
                <SwiperSlide><img className='nature' src={nature4} alt="nature" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;