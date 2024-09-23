
import React, {useState} from "react"


function MyComponent(){


    const [car , setCar] = useState({year:2024 ,
                                     make:"Ford" ,
                                     model:"Mustang"});
// our object will be state variable of car

function handleYearChange(event){

    // we are going to set our car to be javascript object
    // *setCar({year: 2025}); 
    // the value will change to 2025 but the make and model will disappear they no loger exist
    // we ended up doing repalcing the initial object with three properties with new object that has only one properties


    // we need a way to retain the make and model of our car the previous properties that we are not updating 
    // so we use spread operator
    // *setCar({...car,  year: event.target.value}); 
    // same as 
    // *setCar({year: 2024, make: "Ford", model:"Mustang",  year: 2025}); 
// if you have an object with two propeties with the same name you will end up using the later one
    

   // but for better practice with useState is to use updater function
   setCar(c => ({...c,  year: event.target.value})); 
}


function handleMakeChange(event){
    setCar(c => ({...c,  make: event.target.value}));

}

function handleModelChange(event){
    setCar(c => ({...c,  model: event.target.value}));
}


return (
    <div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year}  onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br />
        <input type="text" value={car.model} onChange={handleModelChange}/>
    </div>
);


}


export default MyComponent