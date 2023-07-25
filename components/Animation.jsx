import { fetchForAnimation } from '@/utils';
import SwiperProvider from './SwiperProvider';
import Link from 'next/link';

export default async function Animation() {
  const animation = await fetchForAnimation();
  const { results } = animation;

  return (
    <div className="padding-web w-full my-10">
      <Link href="/genders/16" className="paragraph">
        Animation
      </Link>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
