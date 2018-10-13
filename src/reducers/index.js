
import { combineReducers } from "redux";
import initialuserfetch from "./initialuserfetch";


const rootReducer = combineReducers({
  users:initialuserfetch
});

export default rootReducer;
