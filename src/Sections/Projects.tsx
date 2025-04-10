import { Box, Container, Typography, Paper, Button } from '@mui/material';

const projectsData = [
  {
    title: "Project One",
    description: "A short description of what this project is about.",
    link: "https://github.com/yourusername/project-one",
    demoLink: "https://yourprojectliveurl.com",
  },
  {
    title: "Project Two",
    description: "A brief description of this project and its features.",
    link: "https://github.com/yourusername/project-two",
    demoLink: "https://yourprojectliveurl.com",
  },
  {
    title: "Project Three",
    description: "An overview of the project and how it functions. An overview of the project and how it functions. An overview of the project and how it functions. An overview of the project and how it functions. An overview of the project and how it functions. An overview of the project and how it functions.",
    link: "https://github.com/yourusername/project-three",
    demoLink: "https://yourprojectliveurl.com",
  },
  {
    title: "Project Four",
    description: "An overview of the project and how it functions.",
    link: "https://github.com/yourusername/project-four",
    demoLink: "https://yourprojectliveurl.com",
  },
  {
    title: "Project Five",
    description: "An overview of the  An overview of the project and how it functions. An overview of the project and how it functions. An overview of the project and how it functions. An overview of the project and how it functions. An overview of the project and how it functions. An overview of the project and how it functions. An overview of the project and how it functions.",
    link: "https://github.com/yourusername/project-five",
    demoLink: "https://yourprojectliveurl.com",
  },
  {
    title: "Project Six",
    description: "An overview of the project and how it functions.",
    link: "https://github.com/yourusername/project-six",
    demoLink: "https://yourprojectliveurl.com",
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
        color: '#333',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            mb: 6,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            color: '#333',
            letterSpacing: '1px',
          }}
        >
          My Projects
        </Typography>

        {/* Flex container to hold project cards */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,  // Adds spacing between the cards
            justifyContent: 'center', // Center the cards horizontally
          }}
        >
          {projectsData.map((project, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '48%', md: '30%' },  // 1 column on small screens, 2 on medium, 3 on large screens
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',  // Stretch the items to the same height
              }}
            >
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 4,
                  backgroundColor: '#fff',
                  boxShadow: 5,
                  borderRadius: '16px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 12,
                  },
                  height: '100%', // Ensure the Paper has the full height of its container
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#8e24aa',
                    mb: 2,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {project.title}
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
                  {project.description}
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.link}
                    target="_blank"
                    sx={{
                      backgroundColor: '#8e24aa',
                      '&:hover': {
                        backgroundColor: '#7b1fa2',
                      },
                      boxShadow: 3,
                      borderRadius: '8px',
                      px: 4,
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                      fontSize: '1rem',
                    }}
                  >
                    View Code
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    href={project.demoLink}
                    target="_blank"
                    sx={{
                      borderColor: '#8e24aa',
                      color: '#8e24aa',
                      '&:hover': {
                        backgroundColor: '#8e24aa',
                        color: 'white',
                      },
                      boxShadow: 3,
                      borderRadius: '8px',
                      px: 4,
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                      fontSize: '1rem',
                    }}
                  >
                    Live Demo
                  </Button>
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
