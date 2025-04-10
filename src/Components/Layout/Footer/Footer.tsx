import React from 'react'; 
import { Box, Container, Typography, Link, IconButton } from '@mui/material'; 
import { GitHub, LinkedIn, Email } from '@mui/icons-material'; 

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#212121', color: 'white', py: 6, mt: 4, borderTop: '2px solid #333' }}>
      <Container maxWidth="lg">
        {/* Top: Copyright and Social Links */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Left side: Copyright */}
          <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            &copy; {new Date().getFullYear()} Sunny Kumar. All rights reserved.
          </Typography>

          {/* Right side: Social Links */}
          <Box display="flex" alignItems="center">
            <IconButton
              color="inherit"
              sx={{
                margin: '0 15px',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform 0.3s',
                },
              }}
              href="https://github.com/yourgithubusername"
              target="_blank"
              aria-label="GitHub"
            >
              <GitHub sx={{ fontSize: '2rem' }} />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                margin: '0 15px',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform 0.3s',
                },
              }}
              href="https://www.linkedin.com/in/yourlinkedinprofile"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedIn sx={{ fontSize: '2rem' }} />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                margin: '0 15px',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform 0.3s',
                },
              }}
              href="mailto:youremail@example.com"
              target="_blank"
              aria-label="Email"
            >
              <Email sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Box>
        </Box>

        {/* Bottom: Contact Info (Optional) */}
        <Box mt={2} textAlign="center">
          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
            For inquiries, email me at{' '}
            <Link href="mailto:youremail@example.com" color="secondary" sx={{ fontWeight: 'bold' }}>
              youremail@example.com
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
