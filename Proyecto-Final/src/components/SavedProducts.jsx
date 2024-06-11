import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Swal from 'sweetalert2';

function SavedProducts() {
    const [savedProducts, setSavedProducts] = useState([]);
    useEffect(() => {
        setSavedProducts(JSON.parse(localStorage.getItem('savedProducts')) || []);
    }, []);
    
    const handleRemove = (product) => {
        let updatedSavedProducts = savedProducts.filter(p => p.id !== product.id);
        setSavedProducts(updatedSavedProducts);
        localStorage.setItem('savedProducts', JSON.stringify(updatedSavedProducts));
        Swal.fire('Eliminado', 'Producto eliminado del carrito', 'info');
    };
    
    return (
        <Grid container spacing={3}>
            {savedProducts.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            alt={product.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography variant="h6" color="text.primary">
                                ${product.price}
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={() => handleRemove(product)}
                            >
                                Eliminar
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default SavedProducts;

    
