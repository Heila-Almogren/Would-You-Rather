import React from "react";
import {connect} from "react-redux";

import '../App.css'
import PollBox from "./PollBox";
import LeaderBoardBox from "./LeaderBoardBox";
import spinner from '../assets/LoadingSpinner.gif'

class LoadingSpinner extends React.Component {


    render() {

        return (
            <div>

                <img src={spinner} className={"spinner"}/>


            </div>

        )
    }
}

export default LoadingSpinner