import React from 'react';
import prestasi from '/images/prestasi.jpeg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={prestasi} alt="" srcset="" /></SwiperSlide>
      <SwiperSlide><img src={prestasi} alt="" srcset="" /></SwiperSlide>
      <SwiperSlide><img src={prestasi} alt="" srcset="" /></SwiperSlide>
      <SwiperSlide><img src={prestasi} alt="" srcset="" /></SwiperSlide>
    </Swiper>
  );
};