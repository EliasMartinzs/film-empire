import Image from 'next/image';
import Link from 'next/link';

export default function Slides({ movie }) {
  const { poster_path, id, original_title } = movie;

  return (
    <div className="padding-web flex flex-col">
      <Link href={`/movie/${id}`} className="w-full h-[20rem]">
        <Image
          src={poster_path}
          alt={original_title}
          fill
          className="object-contain object-center saturate-150"
        />
      </Link>
    </div>
  );
}
