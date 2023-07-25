import { fetchForHorror } from '@/utils';
import SwiperProvider from './SwiperProvider';
import Link from 'next/link';

export default async function Horror() {
  const horror = await fetchForHorror();
  const { results } = horror;

  return (
    <div className="padding-web w-full my-10">
      <Link href="/genders/27" className="paragraph">
        Horror
      </Link>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
