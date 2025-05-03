import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutDetailed: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 5, md: 6 },
        backgroundColor: '#ffffff',
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

        <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
          Hi, I'm Sunny Kumar!
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          I’m a <strong>passionate and driven Frontend SDE</strong> specializing in
          <strong> React.js</strong>, <strong>API Integration</strong>, and <strong>UI/UX Design</strong>. With
          hands-on experience in building <strong>dynamic</strong>, <strong>responsive</strong>, and
          <strong> user-friendly web applications</strong>, my focus is on creating seamless, high-performing
          solutions that provide exceptional experiences across all devices.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          My journey into the world of tech began with a deep curiosity about <strong>programming</strong>,
          which quickly grew into a full-fledged career dedicated to crafting intuitive, user-centered interfaces.
          Over the years, I’ve worked on a diverse range of projects, honing my skills and pushing the boundaries
          of frontend development.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          With expertise in <strong>React.js</strong>, <strong>JavaScript</strong>, <strong>Material-UI</strong>,
          <strong> Tailwind CSS</strong>, <strong>Bootstrap</strong>, and <strong>API Integration</strong>, I aim to
          build scalable and high-performance applications that deliver value to users. I thrive in
          <strong> Agile environments</strong>, where I can collaborate closely with cross-functional teams to
          ensure smooth development cycles and seamless product delivery.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Through internships and real-world projects, I have gained hands-on experience in <strong>React
          development</strong>, <strong>UI/UX design</strong>, and <strong>WordPress</strong>, and I’m continuously
          looking to learn new technologies to stay ahead of industry trends.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
          What I Do
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>React.js & TypeScript</strong>: I specialize in building <strong>interactive and scalable user
          interfaces</strong> using <strong>React.js</strong> and <strong>TypeScript</strong>, optimizing
          performance, and ensuring responsiveness.
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>API Integration</strong>: I excel in integrating <strong>RESTful APIs</strong> using
          <strong> Axios</strong> and <strong>React Query</strong>, ensuring smooth and efficient data handling
          between the frontend and backend.
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>UI/UX Design</strong>: Crafting <strong>user-friendly designs</strong> is my passion. I use tools
          like <strong>Material-UI</strong>, <strong>Tailwind CSS</strong>, and <strong>Bootstrap</strong> to create
          modern, responsive, and clean designs.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>State Management</strong>: Managing application state efficiently with <strong>Redux</strong>,
          <strong> Context API</strong>, and <strong>React Hooks</strong> ensures that applications are scalable
          and maintainable.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>WordPress Development</strong>: In addition to React, I have worked on <strong>WordPress</strong>
          projects, including <strong>custom theme development</strong>, <strong>WooCommerce enhancements</strong>,
          and third-party API integrations.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
          My Approach to Development
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          I believe in the power of <strong>clean, efficient code</strong> and always prioritize the user
          experience. Here's how I approach my work:
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Problem-Solving Mindset</strong>: I tackle challenges head-on, whether it’s optimizing
          performance or debugging issues, ensuring that I deliver effective and scalable solutions.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Collaboration</strong>: I value open communication and teamwork, working alongside designers,
          backend developers, and project managers to deliver high-quality products.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Focus on Performance</strong>: I prioritize performance through techniques like <strong>lazy
          loading</strong>, <strong>code splitting</strong>, and <strong>server-side rendering (SSR)</strong> to
          ensure smooth and fast user experiences.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          I’m always eager to learn, grow, and experiment with the latest technologies. Whether it’s <strong>AI</strong>,
          <strong> Machine Learning</strong>, or new <strong>web design tools</strong>, I continuously explore new areas of development
          to improve my skill set.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
          Let’s Build Something Great!
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          I’m excited to collaborate with innovative teams and contribute to building <strong>high-quality digital
          experiences</strong>. If you're looking for a frontend developer who is passionate about creating scalable,
          user-centric applications, let's connect! Together, we can build something amazing.
        </Typography>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="primary">
              ← Back to Summary
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutDetailed;
