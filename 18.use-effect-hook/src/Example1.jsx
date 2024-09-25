// useEffect(function, [dependencies])
// create width and height of our window is

import React,{useState,useEffect} from "react";

function Example1(){
    const[width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);


    //  * window.addEventListener("resize", handleResize);
    //  * console.log("EVENT LISTENER ADDED");
// there is issue we only need one event listener to make the program work however every time the component re-renders we are adding new event listener 
// so only when our component mountts when we append it to the DOM we will add one event listener  so we will use useEffect

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        // If you ever nedd to unmount the component meaning remove it from the DOM useEffect has another use and that is adding a retrun statement to do any clean up
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER ADDED");
        }
        // means do this code either before next re-render or when the component unmounts
    },[]);

    // you can add more than one useEffect hook
    // we gonna add one useEffect hook 
    // if the width and height changes we are going to update the title of our document to display the width and the height


    useEffect(() => {
        document.title = `Size: ${width} * ${height}`;
    },[width,height]); 

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
    <p>Window Width: {width}px</p>
    <p>Window Height: {height}px</p>
    </>);
}

export default Example1