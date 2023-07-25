import { searchByGenre } from '@/utils';
import SwiperProvider from './SwiperProvider';

export default async function Action() {
  const action = await searchByGenre(28);
  const { results } = action;

  return (
    <div className="padding-web w-full">
      <h3 className="mt-5 title">Action</h3>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
