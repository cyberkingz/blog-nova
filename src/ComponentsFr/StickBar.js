import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

function StickBar() {
  return (
    <AppBar
      style={{
        backgroundColor: '#334155',
        bottom: '0',
        top: 'auto', // Set top to 'auto'
        position: 'fixed',
      }}
    >
      <Toolbar>
    
      </Toolbar>
    </AppBar>
  );
}

export default StickBar;
