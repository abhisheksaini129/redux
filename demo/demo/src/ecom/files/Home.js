import React,{ useState } from 'react'
import { connect } from "react-redux";
import {useHistory} from "react-router-dom";
import {
     makeStyles, Grid ,Paper, Container,Button,
    } from '@material-ui/core';

function Home(props) {
    let useStyles=makeStyles({
        centerDivs:{
            justifyContent: "center",
            alignItems:"center",
            marginTop:"10px",
            
        },
        alignCenter: {
            justifyContent: "center",
            width:"100%",
            height:"100%",
           
        },
        para:{
            textAlign:"justify",
            margin:"auto",
            width:"90%"
        }
     } )

    let classes=useStyles();
    let { products } = props.Product;
    const[item,setItem]=useState("");
    const history = useHistory();
    return (
        
            <div style={{ display: "flex",width:"100%" }}>
            {products.map(product => {
                return (
                    <Container >
                    <Grid container className={classes.centerDivs} spacing={1}>
                    <Grid item sm={12}>
                       
                        
                        <Paper className={classes.alignCenter}>
                        <div key={product.id}>
                        <img src={product.image}alt="image" onClick={()=>{history.push("/product")}} style={{ height: "20vw", width:"60%" }} />
                        <h2 onClick={()=>{history.push("/product")}}>{product.title}</h2>
                        <p className={classes.para} >{product.description}</p>
                        <h3>{product.price}</h3>
                        
                        <Button variant="contained" color="primary" style={{marginBottom:"1rem"}}  onClick={
                            
                            props.add_task}>Add to Cart</Button>
                        </div>
                        </Paper>
                    </Grid>
                    </Grid>
                    </Container>
                    
                )
            })}
            </div>
         )      
}

const mapStateToProps = store => {
    
    // state variables change  
    return store;
}

const mapDispatchtoProps = dispatch => {
    //    action
    // handler function 
    return {
        add_task: (value) => {
            // dispatch action 
             dispatch({ type: "add_task",
            item:value})
        }
    }
}

// higher order function
const HigherOrderComponent =
    connect(mapStateToProps, mapDispatchtoProps)(Home)
export default HigherOrderComponent;
