import { products } from "./data";
let initialState = {
    products,
    cart:0
}
function BallReducer(state = initialState,
    action) {
    switch (action.type) {
        case "add_task":
            console.log("clicked");
            let cartadd=state.cart
    return{
        products:state.products,
        cart:cartadd+1
    }
       
        default:
            return state;
    }
    // console.log("in store",action);
}
export default BallReducer