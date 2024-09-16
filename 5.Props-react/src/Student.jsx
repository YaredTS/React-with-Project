// props = read-only properties that are shared between  components.
//         A parent component can send data to a child component. 
//         <compoent key=value/>

// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
//              age: PropTypes.number

// defaultProps = default values for props in case they are not passed from the parent Component
//                name: "Guest"


import propTypes from 'prop-types'
 
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age} </p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div> 
    );
}

Student.propTypes ={
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}

Student.defaultProps = {
    name: "Guest", 
    age: 0,
    isStudent: false,
}
export default Student