import Action from '@/components/Action';
import Animation from '@/components/Animation';
import Crime from '@/components/Crime';
import Horror from '@/components/Horror';
import Poster from '@/components/Poster';
import { searchByName } from '@/utils';

export default async function Home({ searchParams }) {
  const { query } = searchParams;
  const searchedMovies = await searchByName(query);

  return (
    <main className="pt-20">
      <Poster searchedMovies={searchedMovies} />
      <Horror />
      <Action />
      <Crime />
      <Animation />
    </main>
  );
}
