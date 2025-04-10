import { Box, Container, Typography, Paper, Button } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: '#f5f5f5',
        color: '#333',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            mb: 4,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
          }}
        >
          About Me
        </Typography>

        {/* Flex container to hold both sections */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 4,
            alignItems: 'stretch', // Ensures both sections stretch to the same height
          }}
        >
          {/* First Section - Who Am I */}
          <Paper
            sx={{
              padding: 4,
              backgroundColor: '#fff',
              boxShadow: 3,
              borderRadius: '8px',
              flex: 1, // Ensures both Paper components stretch equally
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between', // Ensure content is spaced out properly
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                color: '#6a1b9a',
                mb: 2,
              }}
            >
              Who Am I?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                fontSize: { xs: '1rem', sm: '1.125rem' },
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              I'm Sunny Kumar, a passionate and driven **Frontend Developer** with expertise in
              **React.js**, **API Integration**, and **UI/UX design**. I enjoy building responsive,
              user-friendly web applications that not only function smoothly but also provide an
              engaging user experience.
            </Typography>
            <Button
              variant="outlined"
              href="#contact"
              sx={{
                color: '#6a1b9a',
                borderColor: '#6a1b9a',
                '&:hover': {
                  backgroundColor: '#6a1b9a',
                  color: '#fff',
                },
                boxShadow: 2,
                borderRadius: '8px',
                px: 4,
              }}
            >
              Get in Touch
            </Button>
          </Paper>

          {/* Second Section - My Skills */}
          <Paper
            sx={{
              padding: 4,
              backgroundColor: '#fff',
              boxShadow: 3,
              borderRadius: '8px',
              flex: 1, // Ensures both Paper components stretch equally
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between', // Ensure content is spaced out properly
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                color: '#6a1b9a',
                mb: 2,
              }}
            >
              My Skills
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                fontSize: { xs: '1rem', sm: '1.125rem' },
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              I specialize in **React.js** for building fast, modern web apps. I have experience
              with **state management** using **Redux** and **Context API**, integrating APIs using
              **Axios**, and creating stunning user interfaces with **Material-UI**, **Tailwind CSS**, and
              **Bootstrap**. I'm continuously learning and striving to stay up-to-date with the latest trends
              in web development.
            </Typography>
            <Button
              variant="outlined"
              href="#projects"
              sx={{
                color: '#6a1b9a',
                borderColor: '#6a1b9a',
                '&:hover': {
                  backgroundColor: '#6a1b9a',
                  color: '#fff',
                },
                boxShadow: 2,
                borderRadius: '8px',
                px: 4,
              }}
            >
              See My Work
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
