const headers = {
  'X-RapidAPI-Key': '8a8d043963msh152aea318653135p1a3358jsn22ae21d518db',
  'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
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
