import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Container } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import AllProducts from './components/AllProducts';
import SearchProduct from './components/SearchProduct';
import Categories from './components/Categories';
import SavedProducts from './components/SavedProducts';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <ShopIcon />
                        </IconButton>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            ITTUXSHOP
                        </Typography>
                        <Button color="secondary" component={Link} to="/all-products">TODOS LOS PRODUCTOS</Button>
                        <Button color="secondary" component={Link} to="/search-product">BUSCAR PRODUCTOS</Button>
                        <Button color="secondary" component={Link} to="/categories">CATEGORIAS</Button>
                        <Button color="secondary" component={Link} to="/saved-products">CARRITO</Button>
                    </Toolbar>
                </AppBar>
                <Container style={{ marginTop: '2rem' }}>
                    <Routes>
                        <Route path="/all-products" element={<AllProducts />} />
                        <Route path="/search-product" element={<SearchProduct />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/saved-products" element={<SavedProducts />} />
                    </Routes>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;
