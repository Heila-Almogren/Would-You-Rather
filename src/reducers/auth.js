import {RECEIVE_DATA} from "../actions/shared";
import {SIGNIN_USER, SIGN_OUT_USER} from "../actions/auth";

export default function auth(state  = null, action) {
    switch (action.type) {
        case SIGNIN_USER:
            return action.user
        case SIGN_OUT_USER:
            return null
        default:
            return state
    }
}