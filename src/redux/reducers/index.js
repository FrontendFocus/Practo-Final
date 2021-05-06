import { combineReducers } from "redux";
import auth from "./auth";
import home from './home';
import themeReducer from './themeReducer'
export default combineReducers({
    auth,
    home,
    themeReducer,
})