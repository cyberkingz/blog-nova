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
          href="https://novalight-uk.com/fr-fr/products/masque-facial-avec-led-novalight"
          variant="contained"
          sx={{ margin: 'auto auto', backgroundColor: '#4ade80', width: '250px', fontWeight: 'bold', fontSize: '16px' }}
        >
        👉 La Meilleur Option
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default StickBar;
