import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import Button from '../Components/Layout/Button/Button'; // Adjust the path as needed

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, #1f1f1f, #6a1b9a, #000000)',
        color: 'white',
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        {/* Main Heading */}
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            lineHeight: 1.2,
          }}
        >
          Hey, I'm{' '}
          <Box component="span" sx={{ color: '#ba68c8' }}>
            Sunny Kumar
          </Box>
        </Typography>

        {/* SDE (Frontend) Specialization */}
        <Typography
          variant="h6"
          sx={{
            color: '#cccccc',
            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
            mb: 2,
          }}
        >
          SDE (Frontend) specializing in{' '}
          <Box component="span" sx={{ color: '#ce93d8', fontWeight: 600 }}>
            React.js
          </Box>{' '}
          and{' '}
          <Box component="span" sx={{ color: '#ce93d8', fontWeight: 600 }}>
            API Integration
          </Box>
        </Typography>

        {/* SDE (Frontend) Description */}
        <Typography
          sx={{
            color: '#bbbbbb',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            mb: 4,
          }}
        >
          Passionate about crafting modern, responsive, and user-focused web apps using React.js and seamless API integrations.
        </Typography>

        {/* Tagline */}
        <Typography
          variant="h6"
          sx={{
            color: '#cccccc',
            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
            mb: 2,
          }}
        >
          WordPress Developer | Custom Themes | Responsive Web Design
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: '#bbbbbb',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            mb: 4,
          }}
        >
          Passionate about building clean, responsive, and user-friendly WordPress websites. I specialize in creating custom themes, plugins, and seamlessly integrating APIs to enhance your site's functionality. Let's bring your ideas to life on the web!
        </Typography>

        {/* Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            href="/projectpage"
            sx={{
              borderRadius: '999px',
            }}
          >
            View Projects
          </Button>

          <Button
            variant="contained"
            size="large"
            href="/contact"
            sx={{
              borderRadius: '999px',
              
            }} 
          >
            Contact Me 
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
