

// export default Navbar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../assets/logo.png"; // Import your logo
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { useMediaQuery } from '@mui/material';

const pages = ['HomePage', 'Cruises', 'Bungalows', 'Cities', 'Contact'];

// Map page names to routes
const pageRoutes: { [key: string]: string } = {
  HomePage: '/', // Root page
  Cruises: '/cruise',
  Bungalows: '/bungalows',
  Cities: '/cities', // Navigate to cities for Hotels
  Contact: '/contact', // Navigate to cities for Hotels
};


function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  
  const isMobile = useMediaQuery('(max-width:900px)'); // Adjust the width as needed
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#003366", margin: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
           <IconButton onClick={()=>{
            navigate('/')

           }}>
             <Box sx={{ display: 'inline-flex', alignItems: 'center' }}> 
               <img 
                 src={logo} 
                 alt="Logo" 
                 style={{ height: 'auto', width: 'auto', maxHeight: '90px' }} 
               />
             </Box>
           </IconButton>

            {/* Show page buttons on desktop and icon on mobile */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexGrow: 1 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    navigate(pageRoutes[page]); // Navigate based on the route map
                    handleCloseNavMenu();
                  }}
                  sx={{ my: 2, color: 'white', display: 'block', mx: 2 }}
                >
                  {page}
                </Button>
              ))}
            </Box>


            {/* Mobile icon button */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Open menu">
                  <IconButton onClick={handleOpenNavMenu} sx={{ p: 0, fontSize: '24px' }}> {/* Adjust icon size here */}
                    <TableRowsIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={() => {
                      navigate(pageRoutes[page]);
                      handleCloseNavMenu();
                    }}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
