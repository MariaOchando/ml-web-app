import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';

const pages = ['Home', 'Music', 'MYMLA', 'Gallery', 'Contact'];
const pageRoutes = {
  Home: '/',
  Music: '/music',
  MYMLA: '/mymla',
  Gallery: '/gallery',
  Contact: '/contact',
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position='static' sx={{ backgroundColor: 'var(--background-dark-color)' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Avatar alt='Logo' src='src/assets/logo.png' />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='navbar show menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
              Paper={{
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }
              }}
            >
              {pages.map((page) => {
                const isActive = location.pathname === pageRoutes[page];
                return (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={pageRoutes[page]}
                    sx={{ fontWeight: 'bold', color: isActive ? '#7072FF' : 'inherit' }}
                  >
                    <Typography textAlign='center' sx={{ color: isActive ? '#7072FF' : 'inherit' }}>{page}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
              const isActive = location.pathname === pageRoutes[page];
              return (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: isActive ? '#7072FF' : 'white',
                    display: 'block',
                    fontWeight: 'bold',
                  }}
                  component={Link}
                  to={pageRoutes[page]}
                >
                  {page}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar