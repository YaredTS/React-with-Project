// click event

function Button1(){

// with click event we are authomatically provided with an event argument
// e is object that discribes the event that occurred
    const handleClick = (e) => e.target.textContent = "OUCH! 😥";

    // return(
    //     <button onClick={(e) => handleClick(e) }>Click Me 😎</button>
    //     // it will display the output event
    // );

    // THERE Is also on doubleclick event handler instead of onclick
    return(
        <button onDoubleClick={(e) => handleClick(e) }>Click Me 😎</button>
    );
}

export default Button1