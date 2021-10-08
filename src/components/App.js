import React from "react";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";

// import ConnectedTodos from './Todos'
// import ConnectedGoals from './Goals'
import ConnectedCreateQuestion from './CreatePoll'
import ConnectedNavbar from "./Navbar";
import ConnectedHome from "./Home";
import {Route, Switch} from "react-router-dom";
import ConnectedSignIn from "./SignIn";
import PollResult from "./PollResult";
import ConnectedLeaderBoardList from "./LeaderBoardList";
import PollPicker from "./PollPicker";
import LoadingSpinner from "./LoadingSpinner";
import NotFound from "./NotFound";




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


        if(auth==null){
            return <ConnectedSignIn/>
        }




        return (
            <div>

                <ConnectedNavbar>

                </ConnectedNavbar>






                <Switch>
                <Route exact path='/' render={() => (
                    <ConnectedHome/>
                )} />

                <Route exact path='/ConnectedSignIn' render={() => (
                    <ConnectedSignIn/>
                )} />





                <Route path='/add' render={({ history }) => (
                    <ConnectedCreateQuestion/>
                )} />


                <Route path='/leaderboard' render={({ history }) => (
                    <ConnectedLeaderBoardList/>
                )} />

                <Route exact path='/questions/:question_id' component={PollResult} />
                <Route exact path='/answer/:id' component={PollPicker} />

                <Route component={NotFound} />

                </Switch>
            </div>
        )
    }
}

export default connect((state) => ({
    loading: state.loading,
    auth: state.users[state.auth]
}))(App);
