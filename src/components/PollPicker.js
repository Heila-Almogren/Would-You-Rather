import React from "react";
import {connect} from "react-redux";

import '../App.css'
import PollBox from "./PollBox";
import LeaderBoardBox from "./LeaderBoardBox";
import {handleAddQuestion, handleAnswerQuestion} from "../actions/questions";
import {Redirect} from "react-router-dom";


class PollPicker extends React.Component {

    state = {
        selectedOption: '',
        toPoll: false,
    }


    AnswerQuestion = (e) => {
        e.preventDefault()

        this.props.dispatch(handleAnswerQuestion(
            this.props.auth.id,
            this.props.id,
            this.state.selectedOption,
            () => {
                this.setState(() => ({
                    toPoll: true,
                }))
            }
        ))
    }


    ValueChange = (e) => {
        const ans = e.target.value

        this.setState(() => ({
            selectedOption: ans
        }))


    }

    /*
    <Redirect to={{
                    pathname: `/poll/${id}`,
                    state: {...this.props}
                }}/>
            }


     */

    render() {

        const {question, id, author} = this.props
        const {toPoll} = this.state

        if (toPoll === true) {
            return <Redirect to={`/poll/${question.id}`}/>
        }
        return (
            <form onSubmit={this.AnswerQuestion}>

                <div className="PollPicker">
                    <table className="pickerTable">
                        <tr>
                            <td rowSpan="4" className="LeaderBoardAvatar">
                                <div className="avatarDiv">
                                    <img
                                        className="avatarImg"
                                        src={author.avatarURL}/>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <p className="wouldYouRather">
                                    Would you rather..
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <div className="option">
                                    <div>
                                        <input type="radio"
                                               name="pick"
                                               value="optionOne"
                                               onChange={this.ValueChange}

                                        /> &nbsp;
                                        {question.optionOne.text}
                                    </div>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <div className="option">
                                    <div>
                                        <input type="radio"
                                               name="pick"
                                               value="optionTwo"
                                               onChange={this.ValueChange}

                                        /> &nbsp;
                                        {question.optionTwo.text}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                &nbsp;
                                <button className="PickerSubmit" type="submit">Submit</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </form>


        )
    }
}

export default connect((state, props) => {
        const id = props.match.params.id
        const question = state.questions[id]
        const author = state.users[question.author]
        const auth = state.users[state.auth]


        return {
            id,
            question,
            author,
            auth
        }
    }
)(PollPicker)
