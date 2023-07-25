import Image from 'next/image';
import Link from 'next/link';

export default function Slides({ movie }) {
  const { poster_path, id, original_title } = movie;

  return (
    <div className="padding-web flex flex-col">
      <Link href={`/movie/${id}`}>
        <Image
          src={poster_path}
          alt={original_title}
          fill
          className="object-cover object-center saturate-150 hover:scale-90"
        />
      </Link>
    </div>
  );
}
