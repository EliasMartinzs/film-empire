import { fetchForAnimation } from '@/utils';
import Link from 'next/link';
import AnimationSlider from './AnimationSlider';

export default async function Animation() {
  const animation = await fetchForAnimation();
  const { results } = animation;

  return (
    <div className="padding-web w-full my-10">
      <Link href="/genders/16" className="paragraph">
        Animation
      </Link>
      <AnimationSlider>{results}</AnimationSlider>
    </div>
  );
}
