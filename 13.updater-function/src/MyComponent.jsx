// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(y => y + 1)
//                        setYear(updater function)  best practice
//   usually represented as        setYear(arrow function)
//                  Allow for safe updates based on the previous state
//                  Used with multiple state updates and asynchronous functions
//                  Good practice to use updater functions

    import React, {useState} from "react";

function MyComponent(){


    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
// why is the increment still increase by 1 

// Uses the CURRENT state to calculate the Next state.
// set functions do not trigger an update.
// React batches together state updates for performance reasons.
// Next state becomes the CURRENT state after an update
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