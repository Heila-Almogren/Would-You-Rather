import React from "react";
import {connect} from "react-redux";

import '../App.css'
import PollBox from "./PollBox";
import LeaderBoardBox from "./LeaderBoardBox";


class LeaderBoardList extends React.Component {


    render() {

        const {LeaderBoardUsers: LeaderBoardMembers} = this.props
        return (
            <div className="LeaderBoardList">

                {
                    LeaderBoardMembers.map(member => (

                        <LeaderBoardBox member={member}/>


                    ))

                }


            </div>

        )
    }
}

export default connect((state) => {
    const allUsers = Object.keys(state.users).map(user => state.users[user])
    const LeaderBoardUsers = allUsers.map((user, index) => ({
            name: user.name,
            avatarURL: user.avatarURL,
            nAnswered: Object.keys(user.answers).length,
            nAsked: user.questions.length,
            nTotal: Object.keys(user.answers).length + user.questions.length
        })
    )
        .sort((a, b) => (a.nTotal < b.nTotal) ? 1 : -1)
        .slice(0, 3)
        .map((user, index) => ({
            rank: index + 1,
            ...user
        }))

    return {
        allUsers,
        LeaderBoardUsers
    }

})(LeaderBoardList)