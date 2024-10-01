
// useState() = Re-renders the component when the state vlaue changes.

// useRef() = "use Reference" Does not cause re-renders when its value change.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger new renders. 

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transition 
//            3. Managing Timers and Intervals      

import React,{useState, useEffect, useRef} from "react";

// we will use useState first to switch it up to useRef to see the comparition 
// function MyComponent(){

//     let [number, setNumber] = useState(0);

//     useEffect(() =>{
//         console.log("component rendered")
//     }) // if we donot pass in dependencie array we will perform code every time this component renders

//     function handleClick(){
//         setNumber(n => n+1)
//     } // whenever my number updated it is going to cause my component to re-render // we can demonstrate that by using useEffect hook on the above

//     return(
//         <>
//         <button onClick={handleClick}>
//             Click Me!
//         </button>
//         {/* <p >{number}</p> */}
//         </>

//     );
// }


// Instead we will use (useRef)

 function MyComponent(){

    // * const ref = useRef(0);
// useRef returns an object that has one property of current 
// if you pass in a value to useRef you can set the property of current to some value

// the current property of your ref object can also refer to html element
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


     useEffect(() =>{
         console.log("component rendered")
        //  console.log(inputRef);
     })

     function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
     }

     function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
     }

     function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
     }

    return(
        <div>
        <button onClick={handleClick1}>
            Click Me 1!
        </button> <br />
        <input type="text" ref={inputRef1}/>
        <br />

        <button onClick={handleClick2}>
            Click Me 2!
        </button><br />
        <input type="text" ref={inputRef2}/>
<br />
        <button onClick={handleClick3}>
            Click Me 3!
        </button><br />
        <input type="text" ref={inputRef3}/>
        
        </div>

     );
 }
export default MyComponent;