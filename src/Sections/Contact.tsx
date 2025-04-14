import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Paper,
} from '@mui/material';

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
    setSnackbarMessage('Thank you for reaching out! I will get back to you soon.');
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', message: '' });
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, sm: 8 },
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 600,
              color: '#8e24aa',
              mb: 3,
            }}
          >
            Get in Touch
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 3 }}
            />

            <TextField
              label="Your Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              type="email"
              sx={{ mb: 3 }}
            />

            <TextField
              label="Your Message"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                backgroundColor: '#8e24aa',
                color: '#fff',
                fontWeight: 600,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#7b1fa2',
                },
              }}
            >
              Send Message
            </Button>
          </form>
        </Paper>

        {/* Snackbar for success message */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
