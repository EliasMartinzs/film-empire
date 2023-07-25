'use client';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slides from './Slides';

export default function SwiperProvider({ children }) {
  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        loop
        autoplay
        className="h-96 lg:h-[30rem] w-full"
      >
        {Array.isArray(children)
          ? children.map(movie => (
              <SwiperSlide>
                <Slides movie={movie} key={movie.title || movie.id} />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
}
