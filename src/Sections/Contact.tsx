import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission success
    setSnackbarMessage('Thank you for reaching out! I will get back to you soon.');
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', message: '' });
    console.log('Form submitted:', formData);
  };

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
          Contact Me
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ backgroundColor: '#fff' }}
            />
          </Box>

          {/* Email Field */}
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              sx={{ backgroundColor: '#fff' }}
            />
          </Box>

          {/* Message Field */}
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              sx={{ backgroundColor: '#fff' }}
            />
          </Box>

          {/* Submit Button */}
          <Box>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#8e24aa',
                '&:hover': { backgroundColor: '#7b1fa2' },
                padding: '10px 20px',
                fontWeight: 600,
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>

        {/* Snackbar for success message */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
