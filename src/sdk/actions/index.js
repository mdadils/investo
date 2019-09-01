import ActionTypes from "./ActionTypes";
import { fetchContactDetails } from "../service";

const Actions = {
  fetchData: async dispatch => {
    const response = await fetchContactDetails();
    dispatch({ type: ActionTypes.SAVE_DATA, contactList: response.data });
  }
};

export default Actions;
