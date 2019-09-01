import { connect } from "react-redux";
import App from "./templates/pages/Contacts";

import Actions from "./sdk/actions";

const mapStateToProps = state => {
  return {
    contactList: state.contactList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      Actions.fetchData(dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
