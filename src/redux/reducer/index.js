import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import regisReducer from "./regisReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  register: regisReducer,
});
