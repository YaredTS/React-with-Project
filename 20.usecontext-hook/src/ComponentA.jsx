

// PROVIDER COMPONENT
// 1. import {createContext} from 'react' ;
// 2. export const MyContext  = createContext();
// 3. <MyContext.provider value={value}>
//           <Child/>
//      </MyContext.Provider>


// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//    import { MyContext } from "./ComponentA" ;
// 2. const value = useContext{MyContext} ;


import React,{useState, createContext} from "react"
import ComponentB from "./ComponentB.jsx"


export const UserContext = createContext();
// the context name should be descriptive of what you are working with if it were color we would say ColorContext

function ComponentA(){

    const [user, setUser] = useState("BroCode");

    return(
        <div className="box">

            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>

            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>

        </div>
    )
}
export default ComponentA