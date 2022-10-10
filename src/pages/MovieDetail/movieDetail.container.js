import { connect } from "react-redux";
import MovieDetail from "./MovieDetail";
import {
  getMovieDetailsSelector,
  getMovieReviewSelector,
} from "../../store/selectors/movie.selector";
import {
  getMovieDetailsAction,
  getMovieReviewsAction,
} from "./../../store/actions/movie.actions";

const mapStateToProps = (state) => {
  return {
    movieDetail: getMovieDetailsSelector(state),
    movieReviews: getMovieReviewSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (payload) => dispatch(getMovieDetailsAction(payload)),
    getMovieReviews: (payload) => dispatch(getMovieReviewsAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
