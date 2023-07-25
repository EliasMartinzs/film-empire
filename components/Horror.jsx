import { searchByGenre } from '@/utils';
import SwiperProvider from './SwiperProvider';

export default async function Horror() {
  const horror = await searchByGenre(27);
  const { results } = horror;

  return (
    <div className="padding-web w-full">
      <h3 className="mt-5 title">Horror</h3>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
