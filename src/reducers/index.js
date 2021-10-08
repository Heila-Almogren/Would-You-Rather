import { combineReducers} from "redux";

import loading from "./loading";
import questions from './questions'
import users from "./users";
import auth from "./auth";

export default combineReducers({
    questions,
    users,
    loading,
    auth
})