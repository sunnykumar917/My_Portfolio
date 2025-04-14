import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Divider,
} from '@mui/material';

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

const Skills = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 5 },
        backgroundColor: '#f5f5f5',
        color: '#333',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            mb: 3,
          }}
        >
          My Skills
        </Typography>

        {Object.entries(skills).map(([category, skillsArray]) => (
          <Box key={category} sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 1.5,
                fontWeight: 500,
                color: '#8e24aa',
                textTransform: 'uppercase',
              }}
            >
              {category === 'CSFundamentals' ? 'Core CS Concepts' : category}
            </Typography>
            <Divider sx={{ mb: 1.5 }} />

            <Stack
              direction="row"
              flexWrap="wrap"
              spacing={1}
              useFlexGap
              sx={{ gap: 1.5 }}
            >
              {skillsArray.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    backgroundColor: '#8e24aa',
                    color: '#fff',
                    fontWeight: 500,
                    borderRadius: '14px',
                    fontSize: '0.8rem',
                    '&:hover': {
                      backgroundColor: '#7b1fa2',
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Skills;
