import React from 'react';
import Footer from '../Layout/Footer/Footer'; 
import Header from '../Layout/Header/Header';
import { Box } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
      <Header />
        <Box sx={{ flexGrow: 1, padding: '0px' }}>
          {children}
        </Box>
      <Footer />
    </Box>
  );
};
export default Layout;
