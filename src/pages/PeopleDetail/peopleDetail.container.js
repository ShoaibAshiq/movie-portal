import { connect } from "react-redux";
import PeopleDetail from "./PeopleDetail";
import { getPeopleDetailDetailsAction } from "../../store/actions/people.actions";
import { getPeopleDetailsSelector } from "../../store/selectors/people.selector";

const mapStateToProps = (state) => {
  return {
    peopleDetail: getPeopleDetailsSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPeopleDetails: (payload) =>
      dispatch(getPeopleDetailDetailsAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetail);
