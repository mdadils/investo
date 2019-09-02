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
    },
    updateItem: item => {
      Actions.updateItem(dispatch, item);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
