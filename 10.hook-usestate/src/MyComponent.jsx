import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");
// stateful variable(name) & setter function(setName)
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        // name = "Spongebob";
        // console.log(name);
        setName("Spongebob")
    }
    const incrementAge = () => {
        setAge(age +1)
    }
    const toggleEmpoyedStatus = () => {
        setIsEmployed(!isEmployed);
    }
return(
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is employed: {isEmployed ? "yes" : "no"}</p>
        <button onClick={toggleEmpoyedStatus}>Toggle status</button>
    </div>
);
}

export default MyComponent