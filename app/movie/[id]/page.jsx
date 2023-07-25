import { searchById } from '@/utils';
import Image from 'next/image';

export default async function page({ params }) {
  const { id } = params;
  const movies = await searchById(id);

  const {
    adult,
    backdrop_path,
    genres,
    title,
    overview,
    popularity,
    poster_path,
    release_date,
    runtime,
    production_companies,
  } = movies;

  const minutesToDate = numbers => {
    const hours = Math.floor(numbers / 60);
    const minutes = numbers % 60;

    return `${hours}h:${minutes}m`;
  };

  return (
    <div className="w-full">
      <div className="w-full h-96 lg:h-[40rem] relative px-0">
        <Image
          src={backdrop_path}
          fill
          alt={title}
          className="object-cover object-center saturate-200"
        />
        <div className="flex-start flex-col">
          <div className="absolute bottom-0 left-10 mb-5 text-white">
            <h3 className="title font-bold mb-2">{title}</h3>
            <div className="flex-start gap-x-5">
              <span className="small">{genres?.at(0)?.name}</span>
              <span className="small">{genres?.at(1)?.name}</span>
              <span className="small">{genres?.at(2)?.name}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-start flex-col lg:grid grid-cols-2 padding-web mt-10">
        <div>
          <h4 className="sub-title font-semibold mb-3">Description</h4>
          <p className="font-extralight">{overview}</p>
        </div>
        <div className="flex-center mt-10 gap-x-10">
          <span>{minutesToDate(runtime)}</span>
          <span>{release_date}</span>
          <span>
            Popularity: <span className="font-bold">{popularity}</span>
          </span>
        </div>
      </div>
      <div className="padding-web flex-col mt-16 flex-start gap-y-5">
        <h4 className="sub-title font-bold">Production Companies</h4>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
            {Array.isArray(production_companies)
              ? production_companies.map(comp => (
                  <div key={comp.id}>
                    <Image
                      src={comp.logo_path}
                      alt={comp.name}
                      width={200}
                      height={200}
                      className="object-contain mb-3"
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
