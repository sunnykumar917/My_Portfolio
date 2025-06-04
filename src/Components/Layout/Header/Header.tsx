import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, Container, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const trigger = useScrollTrigger();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? 'rgba(33, 33, 33, 0.7)' : '#212121',
          backdropFilter: trigger ? 'blur(10px)' : 'none',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', display: 'flex' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'white' }}>
              Sunny Kumar
            </Typography>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button color="inherit" component={RouterLink} to="/">
                Home
              </Button>
              <Button color="inherit" component={RouterLink} to="/about-detailed">
                About
              </Button>
              <Button color="inherit" component={RouterLink} to="/projectpage" >
                Projects
              </Button>
              <Button color="inherit" component={RouterLink} to="/SkillsPage">
                Skills
              </Button>
              <Button   color="inherit" component={RouterLink} to="/contact" >
                Contact
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton sx={{ display: { xs: 'block', md: 'none' } }} onClick={toggleDrawer} color="inherit">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Button fullWidth onClick={toggleDrawer} component={RouterLink} to="/">
            Home
          </Button>
          <Button fullWidth onClick={toggleDrawer} component={RouterLink} to="/about-detailed">
            About
          </Button>
          <Button fullWidth onClick={toggleDrawer} component={ScrollLink} to="/projectpage" smooth duration={500} offset={-70}>
            Projects
          </Button>
          <Button fullWidth onClick={toggleDrawer} component={ScrollLink} to="skills" smooth duration={500} offset={-70}>
            Skills
          </Button>
          <Button fullWidth onClick={toggleDrawer} component={ScrollLink} to="contact" smooth duration={500} offset={-70}>
            Contact
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
