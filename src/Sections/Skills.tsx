import { Box, Container, Typography, Chip, Stack } from '@mui/material';

const skillsData = [
  'React.js',
  'JavaScript',
  'TypeScript',
  'Redux',
  'API Integration',
  'CSS3',
  'HTML5',
  'Tailwind CSS',
  'Material-UI',
  'Git & GitHub',
  'Node.js',
  'Express.js',
  'Firebase',
  'MongoDB',
  'RESTful APIs',
];

const Skills = () => {
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
          My Skills
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          spacing={2}
          sx={{
            gap: 2,
          }}
        >
          {skillsData.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                backgroundColor: '#8e24aa',
                color: '#fff',
                fontWeight: 600,
                borderRadius: '16px',
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: '#7b1fa2',
                },
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Skills;
