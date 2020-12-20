import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import rootReducer from "./reducers/rootReducer";

// const store = createWrapper(makeStore, { debug: true });
const store = createStore(rootReducer, applyMiddleware(thunk));
if (process.browser) {
  // window.store = store.getState();
}

export default store;
