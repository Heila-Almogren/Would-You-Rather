export const SIGNIN_USER = "SIGNIN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER"


function signInUser(user) {
    return {
        type: SIGNIN_USER,
        user,
    };
}


function signOutUser() {
    return {
        type: SIGN_OUT_USER,

    };
}

export function handleSignInUser(user, cb) {
    return (dispatch) => {
        dispatch(
            signInUser(user)
        );
cb()
    }
}


export function handleSignOutUser(cb) {
    return (dispatch) => {
        dispatch(
            signOutUser()
        );
        cb()
    }
}