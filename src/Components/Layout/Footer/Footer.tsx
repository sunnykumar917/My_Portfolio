import React from 'react';
import { Box, Typography, IconButton, Divider, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#212121', color: 'white', padding: '40px 0', mt: '40px' }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Container for sections */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {/* Left section: About */}
          <Box sx={{ textAlign: 'center', mb: 4, flexBasis: '100%', md: '30%' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold', 
                color: '#f5f5f5', 
                mb: 2, 
                fontSize: { xs: '1.2rem', sm: '1.5rem' } 
              }}
            >
              About Me
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                fontSize: { xs: '14px', sm: '16px' }, 
                color: '#bdbdbd',
                padding: '0 10px' 
              }}
            >
              I'm a passionate web developer focused on creating beautiful and responsive websites. Let's connect and collaborate!
            </Typography>
          </Box>

          {/* Middle section: Social Links */}
          <Box sx={{ textAlign: 'center', mb: 4, flexBasis: '100%', md: '30%' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold', 
                color: '#f5f5f5', 
                mb: 2, 
                fontSize: { xs: '1.2rem', sm: '1.5rem' } 
              }}
            >
              Connect with Me
            </Typography>
            <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: 3 }}>
              <Link href="https://github.com/yourusername" target="_blank" color="inherit">
                <IconButton sx={{ fontSize: '30px', '&:hover': { color: '#6a1b9a' } }}>
                  <GitHubIcon />
                </IconButton>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" color="inherit">
                <IconButton sx={{ fontSize: '30px', '&:hover': { color: '#0a66c2' } }}>
                  <LinkedInIcon />
                </IconButton>
              </Link>
              <Link href="https://twitter.com/yourusername" target="_blank" color="inherit">
                <IconButton sx={{ fontSize: '30px', '&:hover': { color: '#1da1f2' } }}>
                  <TwitterIcon />
                </IconButton>
              </Link>
            </Box>
          </Box>

          {/* Right section: Footer Links */}
          <Box sx={{ textAlign: 'center', mb: 4, flexBasis: '100%', md: '30%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, flexWrap: 'wrap' }}>
              <Link href="#about" color="inherit" sx={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: 1 }}>
                About
              </Link>
              <Link href="#portfolio" color="inherit" sx={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: 1 }}>
                Portfolio
              </Link>
              <Link href="#services" color="inherit" sx={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: 1 }}>
                Services
              </Link>
              <Link href="#contact" color="inherit" sx={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: 1 }}>
                Contact
              </Link>
            </Box>
          </Box>
        </Box>

        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" sx={{ fontSize: '12px', color: '#bdbdbd' }}>
            &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
          </Typography>
        </Box>

        {/* Divider for visual separation */}
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', marginTop: '30px' }} />
      </Box>
    </Box>
  );
};

export default Footer;
