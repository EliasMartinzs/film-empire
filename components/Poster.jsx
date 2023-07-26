'use client';

import SwiperProvider from './SwiperProvider';

export default function Poster({ searchedMovies }) {
  const { results } = searchedMovies;

  return (
    <div className="padding-web">
      <h3 className="paragraph">Highlights</h3>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
