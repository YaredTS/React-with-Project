// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               * This component re-renders  
                        // do some thing when component re-render
//               * This component mounts 
                        // mount a component is create and append it to the DOM
//                *The state of a value 
                        // do some thing when state of value changes


// useEffect() is like sidecode writing on the function in the below it canbe callback,anonymous funciton or arrow function


//  * useEffect(function, [dependencies])

// 1. useEffect(() => {})          // Runs after every re-render
// * if we want to run our side effect on every re-render of the component we just need to pass in a function such as arrow function
// 2. useEffect(() => {}, [])      // Runs only on mount
// * if we want to run some side code only when the component mounts and not during every re-render you will pass in empty array of dependencies that tells react perform this code only once when component mounts
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

// Uses 
// #1 Event Listeners 
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API 
// #5 Clean up when a component unmounts

import React,{useState, useEffect} from "react";

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

// 1. useEffect(() => {}) 
    // * useEffect(() => {
    // * document.title = ``;
    // * });
// every time the component re-render change the title of the document
// but 

// 2. useEffect(() => {}, [])
// If you need your side code to run only when the component mounts when we create and add it to the DOM initially you will pass in second argument
// our title will update once 
    // * useEffect(() => {
    // * document.title = `My Counter Program`;
    // * }, []);

// 3. useEffect(() => {}, [value])
// pass in value to your array of dependencies
    useEffect(() => {
    document.title = `Count: ${count} ${color}`;

    return () =>{
        // SOME CLEANUP CODE
    } //option to clean up code before the next render or when you unmount component
    }, [count,color]);
// do this "Count: ${count}" only when  this value "[count]"  changes
// it is same as not having dependecies but not having dependencies the code will going to run for any reason that this component re-renders even for something unrelated


    function addCount(){
        setCount(c => c+1);
    }
    function subtractCount(){
        setCount(c => c-1);
    }
    function changeColor(){
        setColor(c => c === "green" ?  "red" : "green");
    }
    return(<>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button><br />
    <button onClick={changeColor}>Change Color</button>
    </>);
}

export default MyComponent