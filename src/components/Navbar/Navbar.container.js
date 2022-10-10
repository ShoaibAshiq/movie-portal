import { connect } from "react-redux";
import Navbar from "./Navbar";
import { getMoviesAction } from "../../store/actions/movie.actions";
import { getShowsAction } from "../../store/actions/show.actions";
import { getPeoplesAction } from "../../store/actions/people.actions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (payload) => dispatch(getMoviesAction(payload)),
    getShows: (payload) => dispatch(getShowsAction(payload)),
    getPeoples: (payload) => dispatch(getPeoplesAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
