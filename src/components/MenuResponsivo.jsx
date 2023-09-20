import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Button, Tooltip, Avatar } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import Style from "./Menu.css";
import Foto from "./Logo";
import img from "./Logofoto.png"


const settings = ['Minha Conta','Entrar',  'Sair'];
function MenuResponsivo() {

    const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
              <Foto foto={img}/>
                
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                
            </IconButton>
            <Menu 
             id="menu-appbar"
             anchorEl={anchorElNav}
             anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left',
             }}
             keepMounted
             transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
             }}
             open={Boolean(anchorElNav)}
             
             sx={{
               display: { xs: 'block', md: 'none' },
             }}
            >
               
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>      
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}>
                        <a href='http://localhost:3000/'> Todos</a>
                    </Button>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}>
                       <a href='http://localhost:3000/login'>Login</a> 
                    </Button>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}>
                       <a href='http://localhost:3000/cadastro'>Cadastro</a> 
                    </Button>    
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}>
                       <a href='http://localhost:3000/filmes'>Séries</a> 
                    </Button>    
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}>
                       <a href='http://localhost:3000/edicao'>Editar</a> 
                    </Button>    
                     
                
                </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}

            </Menu>
            </Box>
        </Toolbar>
        </Container>

    </AppBar>
  )
}

export default MenuResponsivo