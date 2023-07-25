'use client';

import SwiperProvider from './SwiperProvider';

export default function Poster({ searchedMovies }) {
  const { results } = searchedMovies;

  return <SwiperProvider>{results}</SwiperProvider>;
}
