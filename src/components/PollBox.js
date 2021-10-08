import React from "react";
import {connect} from "react-redux";

import '../App.css'
import {Redirect} from "react-router-dom";


class PollBox extends React.Component {

    state = {
        toPicker: false,
        toResult: false
    }


    goToPoll = (e) => {


        if (this.props.isAnswered) {
            this.setState(() => ({
                toResult: true,
            }))
        } else {
            this.setState(() => ({
                toPicker: true,
            }))
        }
    }

    render() {

        const {author, question, isAnswered} = this.props;
        const {toPicker, toResult} = this.state;


        if (toPicker === true) {
            return <Redirect to={`/answer/${question.id}`}/>
        }


        if (toResult === true) {
            return <Redirect to={`/questions/${question.id}`}/>
        }

        return (
            <div className="pollDiv">
                <p className="asks">
                    {isAnswered} {author.name} Asks:
                </p>

                <div className="pollDivRow">
                    <div className="avatarDiv">

                        <img
                            className="avatarImg"
                            src={author.avatarURL}
                            alt=""/>

                    </div>

                    <div className="pollOverviewDiv">

                        <div className="textWrap">


                            {question['optionOne']['text']} or {question['optionTwo']['text']}
                        </div>
                        <br/>

                        <button className="viewPollButton" onClick={this.goToPoll}>
                            View Poll
                        </button>


                    </div>
                </div>
            </div>

        )
    }
}

export default connect((state, props) => {
        const id = props.id
        const question = state.questions[id]
        const author = state.users[question.author]
        const auth = state.users[state.auth]
        const isAnswered = Object.keys(auth.answers).includes(id)


        return {
            id,
            question,
            author,
            auth,
            isAnswered
        }
    }
)(PollBox)