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
    <div className="w-full h-full mt-2">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 5,
          },
        }}
        loop
        autoplay
        className="h-96 lg:h-[20rem] w-full"
      >
        {Array.isArray(children) ? (
          <>
            {children
              .filter((_, idx) => idx < 10)
              .map(movie => (
                <SwiperSlide key={movie.title && movie.id} className="bg-black">
                  <Slides movie={movie} />
                </SwiperSlide>
              ))}
          </>
        ) : null}
      </Swiper>
    </div>
  );
}

// {Array.isArray(children)
//   ? children.map(movie => (
// <SwiperSlide key={movie.title && movie.id} className="bg-black">
//   <Slides movie={movie} />
// </SwiperSlide>
//     ))
//   : null}
