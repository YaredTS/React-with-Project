import PropsTypes from "prop-types";

function List(props){
    const component = props.component;
    const category = props.category;

    const listItems = component.map( fruit => <li key={fruit.id}>
                                           {fruit.name}: &nbsp;
                                           <b>{fruit.calories}</b>
                                           </li>);

    return( <>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol> 
            </>);

}
List.PropsType = {
    category: PropsTypes.string,
    component: PropsTypes.arrayOf(PropsTypes.shape(
                                    {id: PropsTypes.number,
                                    name:PropsTypes.string, 
                                    calories: PropsTypes.number}
                                                ))
}

List.defaultProps = {
    catagory: "Catefogory",
    component: [],
}

export default List