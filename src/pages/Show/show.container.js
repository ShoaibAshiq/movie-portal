import { connect } from "react-redux";
import Show from "./Show";
import { getShowsSelector } from "../../store/selectors/show.selector";
import { getShowsAction } from "./../../store/actions/show.actions";

const mapStateToProps = (state) => {
  return {
    shows: getShowsSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShows: (payload) => dispatch(getShowsAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
