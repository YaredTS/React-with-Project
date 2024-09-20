// onChange = event handler used primarily with form elements
//            ex. <input> , <textarea> , <select> ,<radio>
//          Triggers a function every time the value of the input changes




import React, {useState} from "react"


function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    // comment
    const [comment, setComment] = useState("");
    // payment method
    const [payment, setpayment] = useState("");
    // delivery kind
    const [shipping, setShipping] = useState();


    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handelQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setpayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }



    return(
        <>
            <input  value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handelQuantityChange}/>
            <p>Quantity: {quantity}</p>

            <textarea placeholder="enter delivery instructions" value={comment} onChange={handleCommentChange}/>
            <p>Comment: {comment}</p>


            <select name="" id="" value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Vista</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label htmlFor="">
            <input type="radio" value="Pick Up" 
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange}/>
                Pick up
            </label>
            <br />
            <label htmlFor="">
            <input type="radio" value="Delivery" 
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </>
    );

}

export default MyComponent
