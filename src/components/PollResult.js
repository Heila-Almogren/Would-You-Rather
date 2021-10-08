import React from "react";
import {connect} from "react-redux";

import '../App.css'
import PollBox from "./PollBox";
import PollResultBar from "./PollResultBar";


class PollResult extends React.Component {

    render() {

        const {
            id,
            question,
            author,
            optionOneVoters,
            optionTwoVoters,
            totalVoters,
            optionOnePercentage,
            optionTwoPercentage,
            isAnswered,
            selectedAnswer
        } = this.props


        return (
            <div className="QuestionResultsDiv">
                <p className="asks">
                    Asked by {author.name}
                </p>
                <div className="pollDivRow">
                    <div className="avatarDiv">
                        <img
                            className="avatarImg"
                            src={author.avatarURL}
                        />
                    </div>


                    <div className="pollOverviewDiv">
                        <p>
                            <b>Results</b>

                        </p>

                        <PollResultBar option={question.optionOne.text}
                                       nVoters={optionOneVoters}
                                       percentage={optionOnePercentage}
                                       totalVoters={totalVoters}
                                       isSelected={selectedAnswer === 1}

                        />
                        <br/>
                        <PollResultBar option={question.optionTwo.text}
                                       nVoters={optionTwoVoters}
                                       percentage={optionTwoPercentage}
                                       totalVoters={totalVoters}
                                       isSelected={selectedAnswer === 2}

                        />


                    </div>
                </div>
            </div>

        )
    }
}


export default connect((state, props) => {
        const id = props.match.params.id
        const question = state.questions[id]
        const author = state.users[question.author]
        const auth = state.users[state.auth]
        const isAnswered = Object.keys(auth.answers).includes(id)
        const optionOneVoters = question.optionOne.votes.length
        const optionTwoVoters = question.optionTwo.votes.length
        const totalVoters = optionOneVoters + optionTwoVoters
        const optionOnePercentage = optionOneVoters / totalVoters * 100
        const optionTwoPercentage = optionTwoVoters / totalVoters * 100
        const selectedAnswer = isAnswered ?
            question.optionOne.votes.includes(author.id) ?
                1 : 2
            : 0

        return {
            id,
            question,
            author,
            optionOneVoters,
            optionTwoVoters,
            totalVoters,
            optionOnePercentage,
            optionTwoPercentage,
            isAnswered,
            selectedAnswer
        }
    }
)(PollResult)