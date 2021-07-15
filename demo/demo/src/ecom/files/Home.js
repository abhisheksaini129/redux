import React from 'react'
import { connect } from "react-redux";

function Home(props) {
    let { products } = props;
    return (
        
            <div style={{ display: "flex" }}>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <img src={product.image}alt="ima" style={{ height: "20vw" }} />
                        <h2>{product.title}</h2>
                        <div>{product.description}</div>
                        <h3>{product.price}</h3>
                        <button onClick={props.add_task}>Add to Cart</button>
                    </div>
                )
            })}
            </div>
         )      
}

const mapStateToProps = store => {
    console.log("in map state to prop", store);
    // state variables change  
    return store;
}

const mapDispatchtoProps = dispatch => {
    //    action
    // handler function 
    return {
        add_task: () => {
            // dispatch action 
             dispatch({ type: "add_task"})
        }
    }
}

// higher order function
const HigherOrderComponent =
    connect(mapStateToProps, mapDispatchtoProps)(Home)
export default HigherOrderComponent;
