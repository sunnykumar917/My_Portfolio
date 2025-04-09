// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // MUI Menu icon for mobile drawer
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* AppBar (Header) */}
      <AppBar position="sticky" sx={{ backgroundColor: '#212121' }}>
        <Toolbar sx={{ justifyContent: 'space-between', display: 'flex' }}>
          {/* Logo/Name */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
            Your Name
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit" component={Link} to="about" smooth={true} duration={500}>
              About
            </Button>
            <Button color="inherit" component={Link} to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Button>
            <Button color="inherit" component={Link} to="services" smooth={true} duration={500}>
              Services
            </Button>
            <Button color="inherit" component={Link} to="contact" smooth={true} duration={500}>
              Contact
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton sx={{ display: { xs: 'block', md: 'none' } }} onClick={toggleDrawer} color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer for Navigation Links */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Button fullWidth onClick={toggleDrawer} component={Link} to="about" smooth={true} duration={500}>
            About
          </Button>
          <Button fullWidth onClick={toggleDrawer} component={Link} to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Button>
          <Button fullWidth onClick={toggleDrawer} component={Link} to="services" smooth={true} duration={500}>
            Services
          </Button>
          <Button fullWidth onClick={toggleDrawer} component={Link} to="contact" smooth={true} duration={500}>
            Contact
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
