import { Box, Container, Typography} from '@mui/material';
import CustomButton from '../Components/Layout/Button/Button';

const AboutSummary: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 5, md: 6 },
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
        <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
          Hi, I'm Sunny Kumar
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          I’m a <strong>passionate and driven Frontend SDE</strong> specializing in
          <strong> React.js</strong>, <strong>API Integration</strong>, and <strong>UI/UX Design</strong>. With
          hands-on experience in building <strong>dynamic</strong>, <strong>responsive</strong>, and
          <strong> user-friendly web applications</strong>, my focus is on creating seamless, high-performing
          solutions that provide exceptional experiences across all devices.
        </Typography>

        <Box display="flex" justifyContent="center" mt={6}>
          <CustomButton href="/about-detailed">
            View in Details
          </CustomButton>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSummary;
