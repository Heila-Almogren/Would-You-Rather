import React from "react";
import {connect} from "react-redux";

import '../App.css'
import {Link} from "react-router-dom";


class LeaderBoardBox extends React.Component {




    render() {

        const { member } = this.props;
        
        return (
            <div className="LeaderBoardMember">

                <table className="LeaderBoardTable">
                    <tbody>
                    <tr>
                        <td rowSpan="4" className="LeaderBoardAvatar">
                            <div className="avatarDiv">
                                <img
                                    className="avatarImg"
                                    src={member.avatarURL} alt={"avatar"}/>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <p className="LeaderBoardName">
                                {member.name} {
                                (()=>{
                                    switch(member.rank){
                                        case 1: return (<span>&#129351;</span>);
                                        case 2: return (<span>&#x1f948;</span>);
                                        case 3: return (<span>&#129353;</span>);
                                    }
                            })()

                            }
                            </p>

                        </td>
                        <td rowSpan="4" className="scoreTD">
                            <div className="score">
                                Score
                                <br/>
                                <br/>
                                <div className="scoreNum">
                                    <div style={{margin: "auto"}}>
                                        {member.nTotal}
                                    </div>

                                </div>

                            </div>

                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td className="borderBottom">
                            <div className="stat">
                                <div>
                                    Answered Questions
                                </div>
                                <div>
                                    {member.nAnswered}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>

                            <div className="stat">
                                <div>
                                    Created Questions
                                </div>
                                <div>
                                    {member.nAsked}
                                </div>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    </tbody>
                </table>


            </div>

        )
    }
}

export default LeaderBoardBox