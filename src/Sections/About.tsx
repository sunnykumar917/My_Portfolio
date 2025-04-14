import { Box, Container, Typography, Button } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';

const About: React.FC = () => {
  return (
    <Box
    sx={{
      py: { xs: 4, sm: 5, md: 6 }, // Reduced vertical padding (top and bottom)
      
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

        {/* Flex container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 4,
            alignItems: 'stretch',
          }}
        >
          {/* Scrollable content with fixed button */}
          <Box
            sx={{
              width: '100%',
              height: '400px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          > 
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  display: 'none', // Chrome, Safari, Edge
                },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
                Hi, I'm Sunny Kumar
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                I am a passionate and driven <strong>SDE (Frontend)</strong> specializing in <strong>React.js</strong>,
                <strong> API Integration</strong>, and <strong>UI/UX design</strong>. With hands-on experience in building
                <strong> dynamic, responsive, and user-friendly web applications</strong>,
                I focus on creating seamless, high-performing solutions that engage users and deliver exceptional experiences across all devices.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                My journey into the tech world started with a deep curiosity about programming,
                which has evolved into a career dedicated to crafting intuitive user interfaces.
                Through <strong>multiple internships</strong> and <strong>real-world projects</strong>,
                I've gained expertise in both <strong>frontend development</strong> and <strong>WordPress</strong>.
                My skill set includes <strong>React.js</strong>, <strong>JavaScript</strong>, <strong>Material-UI</strong>,
                <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, and <strong>API handling</strong>,
                enabling me to create responsive and scalable applications.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                I have successfully collaborated with backend developers to integrate APIs,
                manage application state with tools like <strong>Redux</strong> and <strong>Context API</strong>,
                and implement role-based access control. This experience, along with my ability to
                <strong> troubleshoot issues, optimize performance, and work in Agile environments</strong>,
                has honed my problem-solving and teamwork skills, allowing me to deliver high-quality products that meet client needs.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                In addition to frontend development, I have a solid background in <strong>WordPress</strong>,
                from building custom themes and plugins to enhancing site functionality with third-party API integrations.
                I’m passionate about learning new technologies and continuously pushing the boundaries of web development.
                Whether it's <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>,
                or the latest tools in web design, I'm always excited to explore new frontiers in tech.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                I believe in writing <strong>clean, efficient code</strong>,
                <strong> solving problems creatively</strong>, and <strong>focusing on user-centric designs</strong>.
                Communication and collaboration are key to delivering successful projects, and I thrive in fast-paced,
                collaborative environments where I can quickly adapt and contribute to innovative solutions.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                🚀 <strong>Let’s build something great together!</strong>
              </Typography>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#f5f5f5',
                py: 5,
                display: 'flex',
                justifyContent: 'center',
               
              }}
            >
              <Link smooth to="#contact">
  <Button variant="contained" color="primary">
    Let’s Connect!
  </Button>
</Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
