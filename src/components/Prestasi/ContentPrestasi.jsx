import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import 'swiper/css';

function ContentPrestasi ({img, title, role}) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='flex flex-col items-center text-gray-500 border-2 rounded-md p-2 bg-white'>
          <img src={img} alt="Logo Prestasi" />
          <div className='font-semibold text-xl'>
            <h1>{title}</h1>
          </div>
          <div className='font-medium'>
            <span>{role}</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ContentPrestasi;