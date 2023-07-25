import { searchByGenre } from '@/utils';
import SwiperProvider from './SwiperProvider';

export default async function Crime() {
  const action = await searchByGenre(80);
  const { results } = action;

  return (
    <div className="padding-web w-full">
      <h3 className="mt-5 title">Crime</h3>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
