import {
    ADD_QUESTION, ANSWER_QUESTION
} from "../actions/questions";

import {RECEIVE_DATA} from "../actions/shared";


export default function questions(state = {}, action) {
    switch (action.type) {
        case ADD_QUESTION:
            return Object.assign(state, {
                [action.formattedQuestion.id]: action.formattedQuestion
            })

        case ANSWER_QUESTION: return {
            ...state,
            [action.qid]: {
                ...state[action.qid],
                [action.answer]: {
                    ...state[action.qid][action.answer],
                    votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                }
            }
        }

        case RECEIVE_DATA:
            return action.questions
        default:
            return state;
    }
}