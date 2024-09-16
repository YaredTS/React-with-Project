import propTypes from "prop-types"

function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else {
    //     return <h2>Please log in to continue</h2>
    // }

    // OR we can use ternary operator

    // return (
    //     props.isLoggedIn ?     <h2 className="welcome-message"> Welcome {props.username}</h2 >:    
    //                            <h2 className="login-prompt">Please log in to continue</h2>
    // );

    // OR
    const welcomeMessage = <h2 className="welcome-message"> 
                            Welcome {props.username}
                            </h2 >

    const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue
                        </h2>

    return ( props.isLoggedIn ? welcomeMessage : loginPrompt);

}

UserGreeting.proptypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: Guest,
}
export default UserGreeting