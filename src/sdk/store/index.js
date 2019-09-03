import { createStore, applyMiddleware, compose } from "redux";

import Reducer from "../reducers";
import thunk from "redux-thunk";

const initalState = {
  contactList: []
};

// noop for no-operation.
// If devtools are not installed, a function must be passed to compose.
const noop = x => x;

const myStore = createStore(
  Reducer,
  initalState,

  compose(
    applyMiddleware(thunk),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      noop
  )
);

export default myStore;
