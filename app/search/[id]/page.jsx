import Test from '@/components/Test';

import { searchByName } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Search({ params }) {
  const { id } = params;

  const newQuery = id.replaceAll('-', ' ');
  const movies = await searchByName(newQuery);
  const { results } = movies;

  return (
    <div className="w-full h-full padding-web pt-20">
      {Array.isArray(results) ? (
        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-5 gap-5">
          {results.map(movie => (
            <Link href={`/movie/${movie.id}`}>
              <div className="relative w-full h-96">
                <Image src={movie.poster_path} fill className="object-cover" />
              </div>
              <p className="paragraph pt-3">{movie.title}</p>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
