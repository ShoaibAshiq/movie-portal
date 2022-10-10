import { api } from "./../../config/config";
/* 
  Trending API's
*/

export const getTrending = async (type) => {
  const { data } = await api.get(`trending/all/${type}`);
  return data;
};

/**
 * Movies API's
 */
export const getPopularMovies = async (page = 1) => {
  const { data } = await api.get(`/movie/popular?page=${page}`);
  return data;
};

export const getTopRatedMovies = async (page = 1) => {
  const { data } = await api.get(`/movie/top_rated?page=${page}`);
  return data;
};

export const getNowPlaying = async (page = 1) => {
  const { data } = await api.get(`/movie/now_playing?page=${page}`);
  return data;
};

export const getUpcomingMovies = async (page = 1) => {
  const { data } = await api.get(`/movie/upcoming?page=${page}`);
  return data;
};

export const getMovieDetails = async (movie_id) => {
  const { data } = await api.get(`/movie/${movie_id}`);
  return data;
};

export const getMovieReviews = async (id) => {
  const { data } = await api.get(`/movie/${id}/reviews`);
  return data;
};

/* 
  TV Show API's
*/
export const getPopularTVShow = async (page = 1) => {
  const { data } = await api.get(`/tv/popular?page=${page}`);
  return data;
};

export const getOnAiredTvShows = async (page = 1) => {
  const { data } = await api.get(`/tv/on_the_air?page=${page}`);
  return data;
};

export const getAiringTodayTvShows = async (page = 1) => {
  const { data } = await api.get(`/tv/airing_today?page=${page}`);
  return data;
};

export const getTopRatedTv = async (page = 1) => {
  const { data } = await api.get(`/tv/top_rated?page=${page}`);
  return data;
};

export const getShowDetails = async (tv_id) => {
  const { data } = await api.get(`/tv/${tv_id}`);
  return data;
};

export const getShowReviews = async (id) => {
  const { data } = await api.get(`/tv/${id}/reviews`);
  return data;
};

/* Peoples API'S */

export const getPopularPeople = async (page = 1) => {
  const { data } = await api.get(`/person/popular?page=${page}`);
  return data;
};

export const getPopularPeopleDetails = async (id) => {
  const { data } = await api.get(`/person/${id}`);
  return data;
};

/* Multi Search API'S */

export const getMultiSeacrhResult = async (search) => {
  const { data } = await api.get(`/search/multi?query=${search}`);
  return data;
};
