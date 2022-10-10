import { connect } from "react-redux";
import Home from "./Home";
import {
  PopularSelector,
  getFreeToWatchSelector,
  getTrendingSelector,
  getLatestTrailerSelector,
  getSearchResultsSelector,
} from "../../store/selectors/home.selector";
import {
  getFreeToWatchAction,
  getLatestTrailerAction,
  getSearchAction,
  getTrendingAction,
  getWhatsPopularAction,
} from "./../../store/actions/home.actions";

const mapStateToProps = (state) => {
  return {
    popular: PopularSelector(state),
    freeToWatch: getFreeToWatchSelector(state),
    trailer: getLatestTrailerSelector(state),
    trending: getTrendingSelector(state),
    searchResult: getSearchResultsSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleWhatsPopular: (payload) => dispatch(getWhatsPopularAction(payload)),
    handleFreeToWatch: (payload) => dispatch(getFreeToWatchAction(payload)),
    handleLatestTrailer: (payload) => dispatch(getLatestTrailerAction(payload)),
    handleTrending: (payload) => dispatch(getTrendingAction(payload)),
    handleSearch: (payload) => dispatch(getSearchAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
