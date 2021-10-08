import React from "react";
import {connect} from "react-redux";
import {handleSignInUser} from "../actions/auth";
import Select from "react-select";


class SignIn extends React.Component {




    signIn = (user) => {

        this.props.dispatch(handleSignInUser(user.value.id, ()=>{
        }))
    };



    render() {

        const {options} = this.props






        return (
            <div className="signInDiv">

                <div className="welcome">
                    Welcome to the would you rather app!
                    <br/>
                    Please sign in to continue
                </div>

                <img className="card_holding_image"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Colombia_road_sign_SP-55A.svg/120px-Colombia_road_sign_SP-55A.svg.png"
                     alt=""/>
                <br/>
                <p className="SignIn_label">
                    Sign In
                </p>

                    <Select

                        onChange={this.signIn}
                        options={options}
                    />

            </div>
        )
    }
}


export default connect((state, props) => {

    const users= state.users
    const options = Object.keys(users).map(user => {
        let name = users[user]["name"]
        return { value: users[user], label: name }
    })

        return {
            users,
            options

        }
    }
)(SignIn)