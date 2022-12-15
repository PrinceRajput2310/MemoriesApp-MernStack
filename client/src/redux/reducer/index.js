import {combineReducers}  from "redux";
import {reducers} from "./posts";


export default combineReducers({
    posts:reducers
})