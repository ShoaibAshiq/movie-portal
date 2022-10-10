import { connect } from "react-redux";
import Movie from "./Movie";
import { getMoviesSelector } from "../../store/selectors/movie.selector";
import { getMoviesAction } from "./../../store/actions/movie.actions";

const mapStateToProps = (state) => {
  return {
    movies: getMoviesSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (payload) => dispatch(getMoviesAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
