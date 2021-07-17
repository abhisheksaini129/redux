import {  createStore } from "redux";

import rootReducing from "./rootReducing";
const ecomStore = createStore(rootReducing);
// console.log(store);
export default ecomStore;