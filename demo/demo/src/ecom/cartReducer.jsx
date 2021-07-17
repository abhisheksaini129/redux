
let initialState = {
    value:0,
    item:[]
}
function CartReducer(state = initialState,
    action) {
    switch (action.type) {
        case "add_task":
            let cartadd=state.value
    return{
        value:cartadd+1
    }
       
        default:
            return state;
    }
    // console.log("in store",action);
}
export default CartReducer