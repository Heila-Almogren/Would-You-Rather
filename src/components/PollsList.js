import React from "react";
import {connect} from "react-redux";

import '../App.css'
import PollBox from "./PollBox";
import loading from "../reducers/loading";
import LoadingSpinner from "./LoadingSpinner";


const unanswered = "unanswered";
const answered = "answered";


class PollsList extends React.Component {

    state = {
        tab: unanswered,
    }

    switchTabs = () => {
        this.setState(() => (
            {
                tab: this.state.tab === unanswered ? answered : unanswered
            }
        ))
    }

    render() {


        const {answered_questions, unanswered_questions} = this.props

        return (


            <div className="QuestionsList">
                <div className="tabsRow">
                    <div onClick={this.switchTabs}
                         className={"tab" + (this.state.tab === unanswered ? " activeTab" : "")}>
                        Unanswered Questions
                    </div>

                    <div onClick={this.switchTabs}
                         className={"tab" + (this.state.tab === answered ? " activeTab" : "")}>
                        Answered Questions
                    </div>
                </div>

                {
                    this.state.tab === unanswered &&(
                        unanswered_questions.length === 0?
                        <p>Ops! No questions here 👀</p>:
                        unanswered_questions.map(question => {
                            return <PollBox id={question.id} key={question.id}/>
                        })
                    )


                }

                {
                    this.state.tab === answered &&(

                        answered_questions.length === 0?
                            <p>Ops! No questions here 👀</p>:
                        answered_questions.map(question => {
                            return <PollBox id={question.id} key={question.id}/>
                        })
                    )

                }

            </div>
        )
    }
}


export default connect((state, props) => {
        const questions = state.questions
        const auth = state.users[state.auth]
        const users = Object.keys(state.users).map(user => state.users[user])
        const unanswered_questions = Object.keys(state.questions)
            .map(question => {
                return state.questions[question]
            })
            .filter(question => {
                return !Object.keys(auth.answers).includes(question.id)

            })

        const answered_questions = Object.keys(state.questions)
            .map(question => {
                return state.questions[question]
            })
            .filter(question => {
                return Object.keys(auth.answers).includes(question.id)

            })

        return {
            questions,
            auth,
            users,
            unanswered_questions,
            answered_questions,

        }
    }
)(PollsList)