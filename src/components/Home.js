import React from "react";
import {connect} from "react-redux";
import {handleSignInUser} from "../actions/auth";
import Select from "react-select";
import {Link} from "react-router-dom";
// import {useCallback} from 'react';
// import {useHistory} from 'react-router-dom';
// import {Router, Route,HashRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import ConnectedSignIn from "./SignIn";
import ConnectedPollsList from "./PollsList";
import LoadingSpinner from "./LoadingSpinner";

class Home extends React.Component {



    render() {

        const {users, auth} = this.props
        return (
            <div>


                {
                    auth==null?

                        <ConnectedSignIn/>:<ConnectedPollsList/>

                }
            </div>

        )
    }
}


export default connect((state) => (
    {
        users: state.users,
        auth: state.users[state.auth]
    }
))(Home)