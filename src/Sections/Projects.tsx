import React, { useState } from 'react';
import { Box, Container, Typography, Paper,  Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Button from '../Components/Layout/Button/Button';

const reactJsProjects = [
  {
    title: '🧑‍💻 Task Tracker',
    techStack: 'React.js, Bootstrap, Tailwind, Formik, JSON Server',
    description: `A task management application with role-based dashboards built using React.js and a simulated backend.`,
    link: 'https://github.com/yourusername/task-tracker',
    demoLink: 'https://task-tracker-demo.com',
  },
  {
    title: '🛒 SSRStyles – E-commerce Platform',
    techStack: 'React.js, Node.js, Express.js, MongoDB, JWT, CryptoJS, Multer',
    description: `A full-stack e-commerce platform with secure user authentication and product management.`,
    link: 'https://github.com/yourusername/ssrstyles-ecommerce',
    demoLink: 'https://ssrstyles-demo.com',
  },
  {
    title: '🌐 Landing Page / One-Page Website',
    techStack: 'React.js, CSS',
    description: `A responsive, dynamic, and visually appealing one-page website designed using React.js.`,
    link: 'https://github.com/yourusername/landing-page',
    demoLink: 'https://landing-page-demo.com',
  },
  
];

// const wordpressProjects = [
//   {
//     title: '💼 Business & Startup Landing Pages',
//     techStack: 'WordPress, Elementor, WPBakery, Custom CSS',
//     description: `Designed and developed landing pages for companies across various industries including tech, logistics, and digital services.`,
//     fullDescription: `This project involved creating highly responsive and visually appealing landing pages for businesses in different sectors. The design emphasized lead generation, clear call-to-action buttons, and a user-friendly interface. It was built using WordPress with Elementor for ease of customization, and WPBakery was used for drag-and-drop functionality. Custom CSS was added for unique visual styles and branding.`,
//   },
//   {
//     title: '🏥 Hospital Website',
//     techStack: 'WordPress, Elementor',
//     description: `Built a responsive hospital website featuring appointment booking, department overviews, and a mobile-first layout.`,
//     fullDescription: `For this hospital website, the main goal was to ensure easy access to medical services and information. It included a booking system for appointments, a department overview page, and an emergency contact section. Elementor was used for building custom pages while maintaining a clean, professional design. The website was optimized for mobile usage, as it is essential for healthcare service providers to be accessible on any device.`,
//   },
//   {
//     title: '🌐 NGO Foundation Website',
//     techStack: 'WordPress, Elementor, Custom CSS',
//     description: `Created a website for a non-profit organization to showcase their mission, projects, and fundraising campaigns.`,
//     fullDescription: `This website for the NGO focuses on providing information about their mission, upcoming events, and campaigns. The website encourages users to donate and get involved through clearly visible buttons and forms. Elementor was used to build flexible and customizable layouts, and custom CSS was applied to achieve a unique look aligned with the organization's brand identity.`,
//   },
  
// ];

const Projects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);

  //const handleClickOpen = (project: any) => {
  // setCurrentProject(project);
 //   setOpen(true);
 // };

  const handleClose = () => {
    setOpen(false);
  };

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

        {/* React Projects Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mb: 6,
          }}
        >
          {/* React Projects Section 
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 600,
              color: '#333',
              mb: 4,
              fontSize: { xs: '2rem', sm: '2.5rem' },
            }}
          >
           // React & JS Projects
          </Typography> */}

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4, // Adds spacing between the cards
              justifyContent: 'center', // Center the cards horizontally
            }}
          >
            {reactJsProjects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: '100%', sm: '48%', md: '30%' }, // 1 column on small screens, 2 on medium, 3 on large screens
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch', // Stretch the items to the same height
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
                    href={project.link}
                    target="_blank"
                  >
                    View Code
                  </Button>
                  <Button
                    variant="contained"
                    href={project.demoLink}
                    target="_blank"
                  >
                      Live Demo
                    </Button>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>

        {/* WordPress Projects Section
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 600,
              color: '#333',
              mb: 4,
              fontSize: { xs: '2rem', sm: '2.5rem' },
            }}
          >
            WordPress Projects
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4, // Adds spacing between the cards
              justifyContent: 'center', // Center the cards horizontally
            }}
          >
            {wordpressProjects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: '100%', sm: '48%', md: '30%' }, // 1 column on small screens, 2 on medium, 3 on large screens
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch', // Stretch the items to the same height
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
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleClickOpen(project)}
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
                    Read More
                  </Button>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box> */}
        <Box display="flex" justifyContent="center" mt={6}>
          <Button
            variant="contained" 
            href="/projectpage"
            
          >
            More Projects
          </Button>
        </Box>

      </Container>

      {/* Dialog (Modal) for project details */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentProject?.title}</DialogTitle>
        <DialogContent>
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              fontSize: '1rem',
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            <strong>Tech Stack:</strong> {currentProject?.techStack}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              fontSize: '1rem',
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            {currentProject?.fullDescription}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
    
  );
};

export default Projects;
