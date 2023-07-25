const headers = {
  // 'X-RapidAPI-Key': '8a8d043963msh152aea318653135p1a3358jsn22ae21d518db',
  'X-RapidAPI-Key': '2136fcec17msh4741451f13987b6p10a676jsn59268c188b8d',
  'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
};

const headersMovies = {
  'X-RapidAPI-Key': '82fa316542mshf6d8db6f23554a7p1cf804jsne1730c180fba',
  'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
};

export const searchByName = async query => {
  const res = await fetch(
    `https://advanced-movie-search.p.rapidapi.com/search/movie?query=${
      query || 'fast e furious'
    }`,
    { headers: headers }
  );

  const searchByName = await res.json();

  return searchByName;
};

export const searchByGenre = async query => {
  const res = await fetch(
    `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${
      query || 'fast e furious'
    }`,
    { headers: headers }
  );

  const searchByGenre = await res.json();

  return searchByGenre;
};

export const searchById = async id => {
  const res = await fetch(
    `https://advanced-movie-search.p.rapidapi.com/movies/getdetails?movie_id=${id}`,
    { headers: headers }
  );

  const searchById = await res.json();

  return searchById;
};

export const fetchForAction = async () => {
  const res = await fetch(
    `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=28`,
    { headers: headers }
  );

  const fetchForAction = await res.json();

  return fetchForAction;
};

// export const fetchMoviesGetImages = async id => {
//   const res = await fetch(
//     `https://online-movie-database.p.rapidapi.com/title/get-images?tconst=${id}&limit=25`,
//     {
//       headers: headersMovies,
//     }
//   );

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   const getImages = await res.json();

//   return getImages;
// };
