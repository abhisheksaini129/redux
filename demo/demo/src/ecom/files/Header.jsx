import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {IconButton} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header(props) {
    return (
        <div  style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
            ShppingCart
            <span style={{ marginLeft: "4rem" }}>
                <IconButton >
                    <ShoppingCartIcon >
                    </ShoppingCartIcon>
                    {props.cart}  
                </IconButton>
                </span>
        </div>
    )
}

const mapStateToProps = store => {
    console.log("in map state to prop", store);
    // state variables change  
    return store;
}

// higher order function
const HigherOrderComponent =
    connect(mapStateToProps)(Header)
export default HigherOrderComponent;


