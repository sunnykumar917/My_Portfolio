import React from 'react';
import { Box, Container, Typography, Chip, Stack, Divider, Paper } from '@mui/material';

// Data for Skills
const skills = {
  Frontend: [
    'HTML5, CSS3, JavaScript (ES6+)',
    'React.js, jQuery',
    'Tailwind CSS, Material-UI, Bootstrap',
    'React Hooks, Context API',
    'Responsive Design & Cross-Browser Compatibility',
    'Formik & Form Validation',
  ],
  Backend: ['RESTful API Integration', 'Authentication (JWT)'],
  Tools: ['VS Code, Git & GitHub', 'XAMPP, Chrome DevTools', 'Microsoft Office Suite'],
  CSFundamentals: [
    'Data Structures & Algorithms (Basics)',
    'Operating Systems & DBMS (Academic)',
    'Computer Networks Fundamentals',
  ],
  WordPress: [
    'Custom Themes & Plugin Development',
    'Elementor, WPBakery Page Builder',
    'WooCommerce Integration',
    'WordPress Security & Optimization',
    'Website Backup & Migration',
    'API Integration in WordPress',
  ],
};

// Helper Component for Rendering Sections
const SkillsSection = ({ title, skillsArray, color, colorHover }: any) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Paper sx={{ p: 3, backgroundColor: '#ffffff' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {skillsArray.map((skill: string, index: number) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                backgroundColor: color,
                color: '#fff',
                fontWeight: 500,
                borderRadius: '14px',
                fontSize: '0.8rem',
                '&:hover': {
                  backgroundColor: colorHover,
                },
              }}
            />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

const SkillsPage: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 4, sm: 5, md: 6 }, backgroundColor: '#f5f5f5', color: '#333' }}>
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
          My Skills
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            textAlign: 'center',
            mb: 4,
          }}
        >
          Here are the tools, technologies, and frameworks I'm proficient with:
        </Typography>

        {/* Frontend Technologies Section */}
        <SkillsSection
          title="Frontend Technologies"
          skillsArray={[
            'HTML5, CSS3, JavaScript (ES6+)',
            'React.js, jQuery',
            'Tailwind CSS, Material-UI, Bootstrap',
            'React Hooks, Context API',
            'Responsive Design & Cross-Browser Compatibility',
            'Formik & Form Validation',
          ]}
          color="#1976d2"
          colorHover="#1565c0"
        />

        {/* Backend Technologies Section */}
        <SkillsSection
          title="Backend Technologies"
          skillsArray={['RESTful API Integration', 'Authentication (JWT)']}
          color="#388e3c"
          colorHover="#2e7d32"
        />

        {/* Tools & Libraries Section */}
        <SkillsSection
          title="Tools & Libraries"
          skillsArray={['VS Code, Git & GitHub', 'XAMPP, Chrome DevTools', 'Microsoft Office Suite']}
          color="#0288d1"
          colorHover="#0277bd"
        />

        {/* Core CS Fundamentals Section */}
        <SkillsSection
          title="Core CS Concepts"
          skillsArray={[
            'Data Structures & Algorithms (Basics)',
            'Operating Systems & DBMS (Academic)',
            'Computer Networks Fundamentals',
          ]}
          color="#f57c00"
          colorHover="#ef6c00"
        />

        {/* WordPress Technologies Section */}
        <SkillsSection
          title="WordPress Technologies"
          skillsArray={[
            'Custom Themes & Plugin Development',
            'Elementor, WPBakery Page Builder',
            'WooCommerce Integration',
            'WordPress Security & Optimization',
            'Website Backup & Migration',
            'API Integration in WordPress',
          ]}
          color="#8e24aa"
          colorHover="#7b1fa2"
        />
      </Container>
    </Box>
  );
};

export default SkillsPage;
