// Layout.tsx
import React from 'react';
 // Assume your Header component is in the same directory
import Footer from '../Layout/Footer/Footer'; // Assume your Footer component is in the same directory
import Header from '../Layout/Header/Header'; // Assume your Header component is in the same directory
import { Box } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Main Content (Children) */}
      <Box sx={{ flexGrow: 1, padding: '20px' }}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
