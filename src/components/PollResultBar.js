import React from "react";
import {connect} from "react-redux";

import '../App.css'
import {Link} from "react-router-dom";


class PollResultBar extends React.Component {


    render() {

        const {option, nVoters, percentage, totalVoters, isSelected} = this.props

        return (

            <div className={"pollBarDiv" + (isSelected ? " selectedOption" : "")}>

                <div className="splitter">

                    <div>


                        {option}
                    </div>

                    {isSelected && (
                        <div className="tick">
                           &nbsp; &#x2714;
                        </div>
                    )}


                </div>

                <div className="pollBar">
                    <div className="percentage" style={{width: percentage + "%"}}>
                        <p style={{paddingLeft: "5px"}}>
                            {Math.round(percentage)}%
                        </p>

                    </div>
                </div>
                <p className="outOf">{nVoters} out of {totalVoters}</p>
            </div>


        )
    }
}

export default PollResultBar