import { combineReducers } from "redux";
import userReducers from "./reducers/user.reducers";

export default combineReducers({
    users : userReducers,
})