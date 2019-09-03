import ActionTypes from "../actions/ActionTypes";

export default function counter(state, action) {
  switch (action.type) {
    case ActionTypes.SAVE_DATA:
      const newState = { ...state, contactList: action.contactList };
      return newState;

    case ActionTypes.HANDLE_EDIT:
      const newData = state.contactList.map(item => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      return {
        ...state,
        contactList: newData
      };

    default:
      return state;
  }
}
