import { combineReducers } from "redux";
import accountReducer from "./account";

const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;
