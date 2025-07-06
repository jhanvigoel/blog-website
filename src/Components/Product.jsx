import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'



const Product = () => {

    var [product,setProducts] = useState([])
    axios.get("https://fakestoreapi.com/products").then((res)=>{
        
        setProducts(res.data)
        //console.log(product)
    })
  return (
    <div>
    <h1>Product catalogue</h1>
    <Grid container spacing={2}>

        {product.map((val,i)=>{
            return(

                <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
              <CardMedia key={i}
                sx={{ height: 200}}
                image={val.image}
                title="Product"
              />
              <CardContent>
                <Typography key={i} gutterBottom variant="h5" component="div">
                  {val.title}
                </Typography>
                <Typography key={i} variant="body2" sx={{ color: 'text.secondary' }}>
                  {val.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
                </Grid>
                
            )

        })}
    
        
    </Grid>

    </div>
  )
}

export default Product