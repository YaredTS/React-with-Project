import ComponentC from "./ComponentC.jsx"


// function ComponentB(props){

//     return(
//         <div className="box">
//             <h1>ComponentB</h1>
//             <ComponentC user={props.user}/>
//         </div>
//     )
// }

// the above is when we use props to share values between multiple components it can be some how complicated so 
// we can use useContext


function ComponentB( ){
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC/>
        </div>
    )
}

export default ComponentB