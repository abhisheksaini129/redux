import { products } from "./data";
let initialState = {
    products
 
}
function ProductReducer(state = initialState,
    action) {
    switch (action.type) {
       
        default:
            return state;
    }
    
}
export default ProductReducer;