import { searchByGenre } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Genders({ params }) {
  const { id } = params;

  const movie = await searchByGenre(id);
  const { results } = movie;
  return (
    <div className="pt-20 w-full padding-web">
      {Array.isArray(results) ? (
        <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-4">
          {results.map(mov => (
            <div className="h-96 lg:h-[20rem] w-full relative">
              <Link href={`/movie/${id}`}>
                <Image
                  src={mov.poster_path}
                  fill
                  alt={mov.title}
                  className="object-cover object-center hover:border hover:scale-105"
                />
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
