import React from 'react'
import Cart from './ecom/files/Cart'
import Home from './ecom/files/Home'
import Header from "./ecom/files/Header"
import Product from './ecom/files/Product'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function Ecom() {
    return (
        <>
        <Header/>
        <Router>
           <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/cart' component={Cart}></Route>
    <Route exact path='/product' component={Product}></Route>
        </Switch>
        </Router>
    </>    
    )
}

export default Ecom
