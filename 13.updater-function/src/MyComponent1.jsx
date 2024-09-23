// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(year + 1)
//                        setYear(updater function)  best practice
//   usually represented as        setYear(arrow function)
//                  Allow for safe updates based on the previous state
//                  Used with multiple state updates and asynchronous functions
//                  Good practice to use updater functions

import React, {useState} from "react";

function MyComponent(){


    const [count, setCount] = useState(0);

    const increment = () => {
        
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the nest render, it will call them in the same order 

        setCount(c => c + 1);
        // setCount(c => c + 1);
        // setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(<div className="counter-container">

        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>
        </div>);
}


export default MyComponent