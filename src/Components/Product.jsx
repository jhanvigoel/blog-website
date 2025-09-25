
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const truncate = (str, n) => (str.length > n ? str.substr(0, n - 1) + '…' : str);

const Product = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Box sx={{ maxWidth: 1200, margin: '40px auto 0 auto', padding: '0 16px' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center', letterSpacing: 1 }}>
        Product Catalogue
      </Typography>
      <Grid container spacing={4}>
        {product.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={val.id}>
            <Card sx={{
              maxWidth: 370,
              borderRadius: 3,
              boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-6px) scale(1.03)' },
              display: 'flex', flexDirection: 'column', height: '100%'
            }}>
              <CardMedia
                component="img"
                sx={{ height: 220, objectFit: 'contain', background: '#f5f5f5', p: 2 }}
                image={val.image}
                alt={val.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600, mb: 1 }}>
                  {truncate(val.title, 40)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {truncate(val.description, 90)}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#222' }}>
                  ${val.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
                <Button size="small" variant="outlined" sx={{ borderRadius: 2 }}>Share</Button>
                <Button size="small" variant="contained" sx={{ borderRadius: 2 }}>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;