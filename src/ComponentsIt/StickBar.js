import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

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
        <Button
          href="https://novalight-uk.com/it-it/products/masque-facial-avec-led-novalight"
          variant="contained"
          sx={{ margin: 'auto auto', backgroundColor: '#4ade80', width: 'fit-content', fontWeight: 'bold', fontSize: '14px' }}
        >
        👉 La migliore delle opzioni
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default StickBar;
