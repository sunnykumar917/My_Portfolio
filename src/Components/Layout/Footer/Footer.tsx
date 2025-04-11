import { Box, Typography, Link, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#212121',
        color: '#f1f5f9',
        py: 4,
        px: { xs: 2, sm: 6 },
        textAlign: 'center',
        mt: 8,
      }}
    >
      {/* Footer Title */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Sunny Kumar
      </Typography>

      {/* Simple Subtitle */}
      <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2 }}>
        SDE (Frontend) | React.js | API Integration | WordPress Developer
      </Typography>

      {/* Navigation Links */}
      <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 2 }}>
      <Link href="#hero" underline="hover" color="inherit">Home</Link>
        <Link href="#about" underline="hover" color="inherit">About</Link>
        <Link href="#skills" underline="hover" color="inherit">Skills</Link>
        <Link href="#projects" underline="hover" color="inherit">Projects</Link>
        <Link href="#contact" underline="hover" color="inherit">Contact</Link>
      </Stack>

      {/* Social Media Icons */}
      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton
          component="a"
          href="https://github.com/sunnykumar91728"
          target="_blank"
          rel="noopener"
          sx={{ color: '#f1f5f9' }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com/in/sunnykumar91728"
          target="_blank"
          rel="noopener"
          sx={{ color: '#f1f5f9' }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com/sunnykumar_17"
          target="_blank"
          rel="noopener"
          sx={{ color: '#f1f5f9' }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:sunnykumar91728@gmail.com"
          sx={{ color: '#f1f5f9' }}
        >
          <EmailIcon />
        </IconButton>
      </Stack>

      {/* Copyright */}
      <Typography variant="body2" sx={{ color: '#64748b', mt: 3 }}>
        © {new Date().getFullYear()} Sunny Kumar. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
