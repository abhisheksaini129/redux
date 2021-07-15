import React from 'react';
// import Ball from './Component/Ball';

// import Bat from './Component/Bat';
import { Provider } from "react-redux";
import ecomStore from "../src/ecom/ecomStore"
// import store from './store';
// import User from './Component/User';

import Ecom from "./Ecom";

function App() {
  return (
  // <Provider store={store}>
  //   <div className = "App">
  //     <Ball></Ball>
  //     <Bat></Bat>
  //     <User></User>
  //   </div>
  // </Provider>  
  <Provider store ={ecomStore}>
     <Ecom></Ecom>  
  </Provider>
 
  );
}

export default App;
