import { searchByGenre } from '@/utils';
import SwiperProvider from './SwiperProvider';
import Link from 'next/link';

export default async function Horror() {
  const horror = await searchByGenre(27);
  const { results } = horror;

  return (
    <div className="padding-web w-full mt-5">
      <Link href="/genders/27" className="mt-5 paragraph">
        Horror
      </Link>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
