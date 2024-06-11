import React, { useEffect, useState } from 'react';
import { Button, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Swal from 'sweetalert2';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const fetchCategoryProducts = (category) => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    };

    const handleSave = (product) => {
        let savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];
        if (savedProducts.some(p => p.id === product.id)) {
            savedProducts = savedProducts.filter(p => p.id !== product.id);
            Swal.fire('Eliminado', 'Producto eliminado de guardados', 'info');
        } else {
            savedProducts.push(product);
            Swal.fire('Guardado', 'Producto guardado con éxito', 'success');
        }
        localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
    };

    return (
        <div>
            {categories.map(category => (
                <Button 
                    key={category} 
                    variant="contained" 
                    color="primary" 
                    onClick={() => fetchCategoryProducts(category)}
                >
                    {category}
                </Button>
            ))}
            <Grid container spacing={3} style={{ marginTop: '2rem' }}>
                {products.map(product => (
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
                                    onClick={() => handleSave(product)}
                                >
                                    {JSON.parse(localStorage.getItem('savedProducts'))?.some(p => p.id === product.id) ? 'Eliminar' : 'Guardar'}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Categories;
