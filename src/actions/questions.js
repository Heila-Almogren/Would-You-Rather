import * as API from "../data/_DATA.js";

export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";


function addQuestion(formattedQuestion) {
    return {
        type: ADD_QUESTION,
        formattedQuestion,
    };
}


function answerQuestion(authedUser, qid, answer) {
    return {
        type: ANSWER_QUESTION,
        qid: qid,
        authedUser: authedUser,
        answer: answer
    };
}

export function handleAddQuestion(optionOneText, optionTwoText, author, cb) {

    return (dispatch) => {
        API._saveQuestion({optionOneText, optionTwoText, author})

            .then((formattedQuestion) => {

                dispatch(
                    addQuestion(formattedQuestion)
                );
                cb()
            })
            .catch((e) => alert('An error occurred. Try Again' + e))
    }
}


export function handleAnswerQuestion(authedUser, qid, answer, cb) {

    return (dispatch) => {
        API._saveQuestionAnswer({authedUser, qid, answer})
            .then(() => {

                    dispatch(
                        answerQuestion(authedUser, qid, answer)
                    );
                    cb()
            }

                )
            .catch((e) => alert('An error occurred. Try Again' + e))
    }
}