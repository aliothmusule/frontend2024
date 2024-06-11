import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function SearchProduct() {
    const [productId, setProductId] = useState('');
    const [product, setProduct] = useState(null);

    const handleSearch = () => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(() => Swal.fire('Error', 'Producto no encontrado', 'error'));
    };

    const handleSave = () => {
        let savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];
        if (savedProducts.some(p => p.id === product.id)) {
            savedProducts = savedProducts.filter(p => p.id !== product.id);
            Swal.fire('Eliminado', 'Producto eliminado del carrito', 'info');
        } else {
            savedProducts.push(product);
            Swal.fire('Guardado', 'Producto agregado al carrito con éxito', 'success');
        }
        localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
    };

    const handleImageClick = (image) => {
        MySwal.fire({
            imageUrl: image,
            imageAlt: 'Product Image',
            showCloseButton: true,
            showConfirmButton: false,
            customClass: {
                image: 'responsive-image'
            }
        });
    };

    return (
        <div>
            <TextField
                label="Buscar por ID"
                variant="outlined"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>Buscar</Button>
            {product && (
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt={product.title}
                        onClick={() => handleImageClick(product.image)}
                        style={{ cursor: 'pointer' }}
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
                            onClick={handleSave}
                        >
                            {JSON.parse(localStorage.getItem('savedProducts'))?.some(p => p.id === product.id) ? 'Eliminar' : 'Agregar'}
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

export default SearchProduct;
