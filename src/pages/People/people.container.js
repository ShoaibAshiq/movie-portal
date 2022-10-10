import { connect } from "react-redux";
import People from "./People";
import {
  getPeoplesSelector,
  getPagesSelector,
} from "../../store/selectors/people.selector";
import { getPeoplesAction } from "./../../store/actions/people.actions";

const mapStateToProps = (state) => {
  return {
    peoples: getPeoplesSelector(state),
    totalPages: getPagesSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPeoples: (payload) => dispatch(getPeoplesAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
