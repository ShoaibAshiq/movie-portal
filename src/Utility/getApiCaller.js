import {
  getAiringTodayTvShows,
  getMovieDetails,
  getMovieReviews,
  getMultiSeacrhResult,
  getNowPlaying,
  getOnAiredTvShows,
  getPopularMovies,
  getPopularPeople,
  getPopularPeopleDetails,
  getPopularTVShow,
  getShowDetails,
  getShowReviews,
  getTopRatedMovies,
  getTopRatedTv,
  getTrending,
  getUpcomingMovies,
} from "./../store/services/index";

export default function getApiCaller(type, actionFor) {
  if (type === "movies") {
    switch (actionFor) {
      case "Popular":
        return getPopularMovies;
      case "Now Playing":
        return getNowPlaying;
      case "UpComing":
        return getUpcomingMovies;
      case "Top Rated":
        return getTopRatedMovies;
      case "Movie Details":
        return getMovieDetails;
      case "Reviews":
        return getMovieReviews;
      default:
        return false;
    }
  } else if (type === "shows") {
    switch (actionFor) {
      case "Popular":
        return getPopularTVShow;
      case "Airing Today":
        return getAiringTodayTvShows;
      case "On TV":
        return getOnAiredTvShows;
      case "Top Rated":
        return getTopRatedTv;
      case "Show Details":
        return getShowDetails;
      case "Reviews":
        return getShowReviews;
      default:
        return false;
    }
  } else if (type === "peoples") {
    switch (actionFor) {
      case "Popular People":
        return getPopularPeople;
      case "People Details":
        return getPopularPeopleDetails;
      default:
        return false;
    }
  }

  switch (type) {
    case "Streaming":
    case "popular":
      return getPopularMovies;
    case "In Theaters":
      return getNowPlaying;
    case "For Rent":
      return getUpcomingMovies;
    case "On Tv":
      return getPopularTVShow;
    case "Movies":
      return getUpcomingMovies;
    case "Tv":
      return getOnAiredTvShows;
    case "Today":
    case "This Week":
      return getTrending;
    case "Search":
      return getMultiSeacrhResult;
    default:
      return false;
  }
}
