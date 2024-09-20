import React, {useState} from "react"


function ColorPicker(){

    const  [color, setColor] = useState("#FFFFFF")

    function handelColorChange(event){
        setColor(event.target.value);
    }



    return(

        <div className="color-picker-container">
            <h1>Color Picker</h1>

            <div className="color-display" style={{backgroundColor: color}}>
{/* with any CSS properties in javascript we need to enclose them within an object */}
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="">Select a Color:</label>
            <input type="color" value={color} onChange={handelColorChange} />
        </div>

    );
    
}


export default ColorPicker