import { combineReducers } from "redux";
import CartReducer from "./cartReducer";
import ProductReducer from "./ProductReducer";

const rootReducer = combineReducers({
    Cart: CartReducer,
    Product:ProductReducer
});
export default rootReducer;