import { combineReducers } from "redux";

import MainActionReducer from "./MainAction.jsx";
const rootReducer = combineReducers({
    MainAction:MainActionReducer,
});

export default rootReducer;
