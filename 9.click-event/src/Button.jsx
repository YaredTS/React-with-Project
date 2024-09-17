function Button(){

    let count = 0;
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }
        else {
            console.log(`${name} stop clicking me`)
        }
    }

    // const handleClick2 = (name) => console.log(`${name} stop clicking me `)


    return(

        // onClick attribute
        // <button onClick={handleClick2("yared")}>Click Me 😎</button>


        // with out clicking it display yared stop clicking me because if you add set of parenthesis after callback you will envoke it right away
        // so use fuction expression or arrow function
        // <button onClick={() => handleClick2("yared")}>Click Me 😎</button>

        // onClick + conditions
        <button onClick={() => handleClick("yared")}>Click Me 😎</button>

    );
}
 
export default Button