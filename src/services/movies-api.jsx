const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5e4720626ca4c6cc9f658e6222926a8a';

export const getMovies = request => {
  const response = fetch(`${BASE_URL}${request}?api_key=${API_KEY}`);
  return response;
};

export const getMoviesByQuery = query => {
  const response = fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response;
};

export const getMovieDetails = movieId => {
  const response = fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
  return response;
};

export const getMovieActors = movieId => {
  const response = fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response;
};

export const getMovieReviews = movieId => {
  const response = fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response;
};
