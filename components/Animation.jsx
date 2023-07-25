import { searchByGenre } from '@/utils';
import SwiperProvider from './SwiperProvider';

export default async function Animation() {
  const animation = await searchByGenre(16);
  const { results } = animation;

  return (
    <div className="padding-web w-full">
      <h3 className="mt-5 paragraph">Animation</h3>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
