import { fetchForCrime } from '@/utils';
import SwiperProvider from './SwiperProvider';
import Link from 'next/link';
import CrimeSlider from './CrimeSlider';

export default async function Crime() {
  const action = await fetchForCrime();
  const { results } = action;

  return (
    <div className="padding-web w-full my-10">
      <Link href="/genders/80" className="paragraph">
        Crime
      </Link>
      <CrimeSlider>{results}</CrimeSlider>
    </div>
  );
}
