'use client';

import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';

export default function SwiperGallery({ images }) {
  console.log(images);
  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
        loop
        autoplay
        className="w-full h-96 lg:h-[30rem]"
      >
        {Array.isArray(images) ? (
          <>
            {images.map(img => (
              <SwiperSlide key={img.caption || img.url} className="relative">
                <Image
                  src={img.url}
                  fill
                  className="object-contain"
                  alt={img.caption}
                />
              </SwiperSlide>
            ))}
          </>
        ) : null}
      </Swiper>
    </div>
  );
}
