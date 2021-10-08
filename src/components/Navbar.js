import React from "react";
import '../App.css'
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {handleSignOutUser} from "../actions/auth";



class Navbar extends React.Component{

    state = {
        toLogout: false
    }

    logout = ()=>{


        this.props.dispatch(handleSignOutUser(()=>{
            this.setState(() => ({
                toLogout: true
            }))
        }))



    }
    render(){

        const { auth, toLogout } = this.props;

        if (toLogout === true) {
            return <Redirect to='/'/>
        }


        return <div className="navbar">



            <NavLink to="/" exact className="navbar_item">
                <div>
                    Home
                </div>
            </NavLink>



            <NavLink to="/add" className="navbar_item">
                <div >
                    New Question
                </div>
            </NavLink>



            <NavLink to="/leaderboard" className="navbar_item">
                <div>
                    Leader Board
                </div>
            </NavLink>




            <div className="navbar_item">

                {
                    auth == null?
                        <p>Sign In</p> :
                        <p>Hello, {auth?.name}!
                            &nbsp;
                            <button className={"logoutButton"} onClick={this.logout}>logout</button>

                        </p>
                }

            </div>
        </div>
    }

}

export default connect((state) => ({
    auth: state.users[state.auth]
}))(Navbar)