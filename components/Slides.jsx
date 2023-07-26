import Image from 'next/image';
import Link from 'next/link';

export default function Slides({ movie }) {
  const { poster_path, id, original_title } = movie;

  return (
    <Link href={`/movie/${id}`}>
      <div className="relative w-full h-full flex-start">
        <Image
          src={poster_path}
          alt={original_title}
          fill
          className="object-contain saturate-150"
          sizes="(max-width: 430px) 33vw, (max-width: 1200px) 33vw, 33vw"
          loading="lazy"
        />
      </div>
    </Link>
  );
}
