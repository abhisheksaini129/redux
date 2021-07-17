import React from 'react'
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {
    makeStyles, Grid , Container
 } from '@material-ui/core';
import {IconButton,Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header(props) {
   let useStyles=makeStyles({
       outer:{
           width:"100%",
        padding:"0",
        margin:"0"
           
       },
    grid:{
       display:"flex",
       backgroundColor:"skyblue",
       width:"100vw"

    },
    cart:{
        display:"flex",
        marginLeft:"1rem",
       alignItems:"left"
    }
   })
   let classes=useStyles();
   
   let { value} = props.Cart;
   const history = useHistory();
   return (
        <Container className={classes.outer} style={{width:"100%"}}>
            <div className={classes.grid} >
            <Grid container
  alignItems="center"
  >
            <Grid item  xs={3} className={classes.cart}  >
                <h1>
                    ReduxCart
                </h1>
            </Grid>
            <Grid item  xs={7}   ></Grid>
            <Grid item xs={1} >
            <div className={classes.cart} >
            
                <IconButton onClick={()=>{history.push("/cart")}}>
                    <div style={{verticalAlign:"top",margin:"0",padding:"0 ",fontSize:"12px"}}>
                    {value} 
                    <p>
                    <ShoppingCartIcon>
                
                    </ShoppingCartIcon>
                        </p>
                    </div>
                </IconButton>
                      
                        
                </div>
            </Grid> 
            </Grid>
            </div>
            
        </Container>
        
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


