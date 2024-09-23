import React, { useState } from "react"


function MyComponent(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f,newFood]);

    }
    function handleRemoveFood(index){
        // * setFoods(foods.filter((element, i) => i !== index));
// we are going to filter our elements with the current index (i) which is not equal to index (i !== index);
// if u look our element parameter is provided but we are not using it  so we are going to replace it with underscore (_)
// using underscore (_) for parameter is to indecate that the parameter passed to the function is ignored
        setFoods(foods.filter((_, i) => i !== index));


    }

    
    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );

}

export default MyComponent