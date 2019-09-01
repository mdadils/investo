import ActionTypes from "../actions/ActionTypes";

export default function counter(state, action) {
  switch (action.type) {
    case ActionTypes.SAVE_DATA:
      const newState = { ...state, contactList: action.contactList };
      return newState;
    default:
      return state;
  }
}
