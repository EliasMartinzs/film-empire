import { searchByGenre } from '@/utils';
import SwiperProvider from './SwiperProvider';
import Link from 'next/link';

export default async function Animation() {
  const animation = await searchByGenre(16);
  const { results } = animation;

  return (
    <div className="padding-web w-full">
      <Link href="/genders/16" className="mt-5 paragraph">
        Animation
      </Link>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
