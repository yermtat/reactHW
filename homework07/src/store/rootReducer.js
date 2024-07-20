import { combineReducers } from "@reduxjs/toolkit";
import infoReducer from "./infoSlice";

const rootReducer = combineReducers({
  user: infoReducer,
});

export default rootReducer;
