function List(){

    // Array of string
    // const fruits =["apple","orange","banana","coconut","pineapple"]

    // const listItems = fruits.map( fruit => <li>{fruit}</li>);

    // return(<ol>{listItems}</ol>);


    // Array of object
    const fruits =[{id: 1, name:"apple", calories: 95},
                   {id: 2, name: "orange", calories: 45},
                   {id: 3, name: "banana", calories: 105},
                   {id: 4, name: "coconut", calories: 159},
                   {id: 5, name: "pineapple", calories: 37}];

// sort array of object by their name property

//fruits.sort((a,b) => a.name.localeCompare(b.name)) //AlPHABETICAL
//fruits.sort((a,b) => b.name.localeCompare(a.name)) //reverse
// sort by calories
//fruits.sort((a,b) => a.calories-b.calories) // Numeric
//fruits.sort((a,b) => b.calories-a.calories) // reverse numeric

// filter object by certain criteria (filter out list items)

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const listItems = lowCalFruits.map( lowCalFruits => <li key={lowCalFruits.id}>
//                                        {lowCalFruits.name}: &nbsp;
//                                        <b>{lowCalFruits.calories}</b>
//                                         </li>);


 const listItems = fruits.map( fruit => <li key={fruit.id}>
                                              {fruit.name}: &nbsp;
                                              <b>{fruit.calories}</b>
                                            </li>);
    // react would like a unique key for each item for keeping track of items being inserted and removed

    return(
    <>
    <ol>{listItems}</ol></>);
}

export default List