import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        marginTop: '0',
        textAlign: 'center',
        bottom: 0,
        left: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Beauty Secret | All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
