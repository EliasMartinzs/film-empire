'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { BsSearch } from 'react-icons/bs';

export default function Search({ hidden, lgHidden }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = e => {
    e.preventDefault();

    updateParams(query);
    setQuery('');
  };

  const updateParams = query => {
    const search = new URLSearchParams(window.location.search);

    if (query) {
      search.set('query', query);
    } else {
      search.delete(query);
    }

    const pathName = `${window.location.pathname}?${search.toString()}`;
    router.push(pathName);
  };

  return (
    <form className={`flex-center relative`}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value.toLowerCase())}
        className={`${hidden} lg:${
          lgHidden || 'block'
        } p-2 rounded-full outline-none w-44 lg:w-96`}
      />
      <BsSearch
        className={`absolute top-3 right-4 cursor-pointer ${hidden} lg:block`}
        onClick={handleSearch}
      />
    </form>
  );
}
