import { fetchForAction } from '@/utils';
import SwiperProvider from './SwiperProvider';
import Link from 'next/link';

export default async function Action() {
  const action = await fetchForAction();
  const { results } = action;

  return (
    <div className="padding-web w-full my-10">
      <Link href="/genders/28" className="paragraph">
        Action
      </Link>
      <SwiperProvider>{results}</SwiperProvider>
    </div>
  );
}
