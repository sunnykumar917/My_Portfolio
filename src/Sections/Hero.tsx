
import { Box, Container, Typography, Button, Stack } from '@mui/material';


const Hero = () => {
  return (
    
      <Box
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

          <Typography
            variant="h6"
            sx={{
              color: '#cccccc',
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
              mb: 4,
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
            . Passionate about crafting modern, responsive, and user-focused web apps.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              href="#projects"
              sx={{
                backgroundColor: '#8e24aa',
                '&:hover': {
                  backgroundColor: '#7b1fa2',
                },
                boxShadow: 3,
                borderRadius: '999px',
                px: 4,
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#contact"
              sx={{
                color: '#ce93d8',
                borderColor: '#ce93d8',
                '&:hover': {
                  backgroundColor: '#8e24aa',
                  color: '#fff',
                  borderColor: '#8e24aa',
                },
                boxShadow: 3,
                borderRadius: '999px',
                px: 4,
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
