import ActionTypes from "./ActionTypes";
import { fetchContactDetails } from "../service";

const Actions = {
  fetchData: async dispatch => {
    const response = await fetchContactDetails();
    dispatch({ type: ActionTypes.SAVE_DATA, contactList: response.data });
  },
  updateItem: (dispatch, item) => {
    dispatch({ type: ActionTypes.HANDLE_EDIT, item });
  }
};

export default Actions;
