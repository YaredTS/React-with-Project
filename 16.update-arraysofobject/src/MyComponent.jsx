import React, {useState} from "react"

function MyComponent(){

    const [cars , setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCars ={year: carYear,
                        make: carMake,
                        model: carModel};

        setCars(c => [...c, newCars]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_,i) => i !== index));
    }
    function handleYearChange(event){
        setCarYear(event.target.value)
    }
    function handleMakeChange(event){
        setCarMake(event.target.value)
    }
    function handleModelChange(event){
        setCarModel(event.target.value)
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((cars,index) => 
                <li key={index} onClick={()=> handleRemoveCar(index)}>
                    {cars.year} {cars.make} {cars.model}
                </li>
                )}
            </ul>



            <input type="text" value={carYear} onChange={handleYearChange}/><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make"/><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model"/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );

}

export default MyComponent