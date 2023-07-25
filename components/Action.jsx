import { searchByGenre } from '@/utils';
import SwiperProvider from './SwiperProvider';
import Link from 'next/link';

export default async function Action() {
  const action = await searchByGenre(28);
  const { results } = action;

  return (
    <div className="padding-web w-full">
      <Link href="/genders/28" className="mt-5 paragraph">
        Action
      </Link>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
