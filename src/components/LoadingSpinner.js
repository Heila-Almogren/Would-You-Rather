import React from "react";
import '../App.css'
import spinner from '../assets/LoadingSpinner.gif'

class LoadingSpinner extends React.Component {


    render() {

        return (
            <div>

                <img src={spinner} className={"spinner"} alt={"loading spinner"}/>


            </div>

        )
    }
}

export default LoadingSpinner