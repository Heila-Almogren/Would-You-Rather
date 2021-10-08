import React from "react";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";

// import ConnectedTodos from './Todos'
// import ConnectedGoals from './Goals'
import ConnectedCreateQuestion from './CreatePoll'
import ConnectedPollsList from './PollsList'
import ConnectedNavbar from "./Navbar";
import ConnectedHome from "./Home";
import {Link, Route} from "react-router-dom";
import ConnectedSignIn from "./SignIn";
import PollResult from "./PollResult";
import ConnectedLeaderBoardList from "./LeaderBoardList";
import PollPicker from "./PollPicker";
import LoadingSpinner from "./LoadingSpinner";




class App extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(handleInitialData())
    }

    render() {
        const { auth } = this.props;

        if (this.props.loading === true) {
            return <LoadingSpinner/>
        }


        return (
            <div>

                <ConnectedNavbar>

                </ConnectedNavbar>
                <Route exact path='/' render={() => (
                    <ConnectedHome/>
                )} />

                <Route exact path='/ConnectedSignIn' render={() => (
                    <ConnectedSignIn/>
                )} />





                <Route path='/ConnectedCreateQuestion' render={({ history }) => (
                    <ConnectedCreateQuestion/>
                )} />


                <Route path='/ConnectedLeaderBoardList' render={({ history }) => (
                    <ConnectedLeaderBoardList/>
                )} />

                <Route path='/poll/:id' component={PollResult} />
                <Route path='/answer/:id' component={PollPicker} />
            </div>
        )
    }
}

export default connect((state) => ({
    loading: state.loading,
    auth: state.users[state.auth]
}))(App);
