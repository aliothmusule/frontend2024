import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Container } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import AllProducts from './components/AllProducts';
import SearchProduct from './components/SearchProduct';
import Categories from './components/Categories';
import SavedProducts from './components/SavedProducts';
import './App.css'; // Import the CSS file for SweetAlert2

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const update = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener('mousemove', update);
    window.addEventListener('touchmove', update);

    return () => {
      window.removeEventListener('mousemove', update);
      window.removeEventListener('touchmove', update);
    };
  }, []);

  const maxY = 300;
  const backgroundColor = y < maxY ? `rgba(255, 192, 203, ${y / maxY})` : 'rgba(255, 192, 203, 1)';


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ backgroundColor, minHeight: '100vh', position: 'relative' }}>
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
              <Button color="secondary" component={Link} to="/saved-products">GUARDADOS</Button>
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
          {/*x && y ? <h1>{`x: ${x}; y: ${y};`}</h1> : null*/}
          <FavoriteIcon style={{ position: 'absolute', top: y, left: x, color: 'red', fontSize: '3rem', pointerEvents: 'none' }} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
