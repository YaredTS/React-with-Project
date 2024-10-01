import React,{useState,useEffect,useRef} from "react"


function Stopwatch(){
// declarations 
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
// in order to clear this interval we need to keep track of it by its unique ID we will assign it to intervalIdRef
            // setInterval function has two arguments
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10) 
        }
// we should add cleanup fuction to the end of our useEffect hook
    return () => {
        clearInterval(intervalIdRef.current);
    }
    },[isRunning]); 

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    // current property of the startTimeRef object
        // *console.log(startTimeRef.current)
    // we will be given the current date and time in millisecond since epic
    // epic is when your computer thinks time began

    // by keeping a reference to when we started the stopwatch we can see how many milliseconds has elapsed since then
        
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor(elapsedTime % 1000)/10;

        // hours = string(hours).padStart(2,"0");
        // minutes = string(minutes).padStart(2,"0");
        // seconds = string(seconds).padStart(2,"0");
        // milliseconds = string(milliseconds).padStart(2,"0");

        return `${minutes}:${seconds}:${milliseconds}`;

    }
    
    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
    <button onClick={start} className="start-button">Start</button>
    <button onClick={stop} className="stop-button">Stop</button>
    <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    );
  
}

export default Stopwatch