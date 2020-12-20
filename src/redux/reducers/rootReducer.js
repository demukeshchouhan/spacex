import { combineReducers } from "redux";

import launches from "./launches";

const rootReducer = combineReducers({
  launches,
});

export default rootReducer;
