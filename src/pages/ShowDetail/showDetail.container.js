import { connect } from "react-redux";
import ShowDetail from "./ShowDetail";
import {
  getShowDetailsSelector,
  getShowReviewSelector,
} from "../../store/selectors/show.selector";
import {
  getShowDetailsAction,
  getShowReviewsAction,
} from "./../../store/actions/show.actions";

const mapStateToProps = (state) => {
  return {
    showDetail: getShowDetailsSelector(state),
    showReviews: getShowReviewSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShowDetails: (payload) => dispatch(getShowDetailsAction(payload)),
    getShowReviews: (payload) => dispatch(getShowReviewsAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);
