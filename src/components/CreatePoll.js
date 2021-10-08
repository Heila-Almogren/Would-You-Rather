import React from "react";
import {connect} from "react-redux";
import '../App.css'
import {handleAddQuestion} from "../actions/questions";
import {Redirect, withRouter} from "react-router-dom";

class CreatePoll extends React.Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toList: false,
    }


    addQuestion = (e) => {
        e.preventDefault()

        this.props.dispatch(handleAddQuestion(
            this.optionOne.value,
            this.optionTwo.value,
            this.props.auth.id,
            () => {
                this.setState(() => ({
                    optionOne: '',
                    optionTwo: '',
                    toList: true,
                }))
            }
        ))
    }

    handleChange = (e) => {
        const optionOne = this.optionOne.value
        const optionTwo = this.optionTwo.value


        this.setState(() => ({
            optionOne: optionOne,
            optionTwo: optionTwo
        }))


    }


    render() {

        const {
            optionOne,
            optionTwo,
            toList
        } = this.state

        if (toList === true) {
            return <Redirect to='/'/>
        }


        return (
            <div className="createQuestionDiv">
                <div className="createAQuestionLabel">
                    Create A New Question
                </div>
                <form onSubmit={this.addQuestion}>
                    Would you rather:
                    <br/>
                    <input type="text" className="choiceInput" placeholder="Enter option one here.."
                           value={optionOne}
                           onChange={this.handleChange}
                           ref={(input) => this.optionOne = input}
                    />
                    <br/>
                    Or
                    <br/>
                    <input type="text" className="choiceInput" placeholder="Enter option two here.."
                           value={optionTwo}
                           onChange={this.handleChange}
                           ref={(input) => this.optionTwo = input}
                    />
                    <button className="submitButton" onClick={this.addQuestion}>
                        Submit
                    </button>
                </form>

            </div>
        )
    }
}

export default withRouter(connect((state) => ({
    questions: state.questions,
    auth: state.users[state.auth]
}))(CreatePoll))