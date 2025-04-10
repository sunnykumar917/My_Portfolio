import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      
      <AppBar position="sticky" sx={{ backgroundColor: '#212121' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', display: 'flex' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'white' }}>
              Sunny Kumar
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button color="inherit" component={Link} to="hero" smooth={true} duration={500} offset={-70}>
                Home
              </Button>
              <Button color="inherit" component={Link} to="about" smooth={true} duration={500} offset={-70}>
                About
              </Button>
              <Button color="inherit" component={Link} to="projects" smooth={true} duration={500} offset={-70}>
                Projects
              </Button>
              <Button color="inherit" component={Link} to="skills" smooth={true} duration={500} offset={-70}>
                Skills
              </Button>
              <Button color="inherit" component={Link} to="contact" smooth={true} duration={500} offset={-70}>
                Contact
              </Button>
            </Box>

            <IconButton sx={{ display: { xs: 'block', md: 'none' } }} onClick={toggleDrawer} color="inherit">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Button fullWidth onClick={toggleDrawer} component={Link} to="hero" smooth={true} duration={500} offset={-70}>
            Home
          </Button>
          <Button fullWidth onClick={toggleDrawer} component={Link} to="about" smooth={true} duration={500} offset={-70}>
            About
          </Button>
          <Button fullWidth onClick={toggleDrawer} component={Link} to="projects" smooth={true} duration={500} offset={-70}>
            Projects
          </Button>
          <Button fullWidth onClick={toggleDrawer} component={Link} to="skills" smooth={true} duration={500} offset={-70}>
            Skills
          </Button>
          <Button fullWidth onClick={toggleDrawer} component={Link} to="contact" smooth={true} duration={500} offset={-70}>
            Contact
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
