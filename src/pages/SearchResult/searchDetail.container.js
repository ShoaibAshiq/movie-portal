import { connect } from "react-redux";
import SearchResult from "./SearchResult";
import { getSearchResultsSelector } from "../../store/selectors/home.selector";

const mapStateToProps = (state) => {
  return {
    searchResult: getSearchResultsSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
