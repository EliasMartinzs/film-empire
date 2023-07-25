import { searchByGenre } from '@/utils';
import SwiperProvider from './SwiperProvider';
import Link from 'next/link';

export default async function Crime() {
  const action = await searchByGenre(80);
  const { results } = action;

  return (
    <div className="padding-web w-full my-10">
      <Link href="/genders/80" className="paragraph">
        Crime
      </Link>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
