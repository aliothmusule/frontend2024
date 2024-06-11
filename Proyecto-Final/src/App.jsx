import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Container } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import AllProducts from './components/AllProducts';
import SearchProduct from './components/SearchProduct';
import Categories from './components/Categories';
import SavedProducts from './components/SavedProducts';

function App() {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <ShopIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        ITTUXSHOP
                    </Typography>
                    <Button color="inherit" component={Link} to="/all-products">TODOS LOS PRODUCTOS</Button>
                    <Button color="inherit" component={Link} to="/search-product">BUSCAR PRODUCTOS</Button>
                    <Button color="inherit" component={Link} to="/categories">CATEGORIAS</Button>
                    <Button color="inherit" component={Link} to="/saved-products">GUARDADOS</Button>
                </Toolbar>
            </AppBar>
            <Container style={{ marginTop: '2rem' }}>
                <Switch>
                    <Route path="/all-products" component={AllProducts} />
                    <Route path="/search-product" component={SearchProduct} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/saved-products" component={SavedProducts} />
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
