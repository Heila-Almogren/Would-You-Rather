
import {RECEIVE_DATA} from "../actions/shared";
import {SIGNIN_USER} from "../actions/users";
import {ANSWER_QUESTION} from "../actions/questions";


export default function users(state=[], action) {
    switch (action.type) {

        case ANSWER_QUESTION: return {
            ...state,
            [action.authedUser]: {
                ...state[action.authedUser],
                answers: {
                    ...state[action.authedUser].answers,
                    [action.qid]: action.answer
                }
            }
        }

        case RECEIVE_DATA:
            return action.users
        default:
            return state;
    }
}