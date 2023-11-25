import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IntroWriter from './IntroWriter';
import MainProduct from '../ComponentsDk/MainProduct';
import SecondProduct from '../ComponentsDk/SecondProduct';
import ThirdProduct from '../ComponentsDk/ThirdProduct';
import FourthProduct from '../ComponentsDk/FourthProduct';
import FifthProduct from '../ComponentsDk/FifthProduct';
import Footer from '../ComponentsDk/Footer';
import FacebookComments from '../ComponentsDk/FacebookComments';
import SubFooter from './SubFooter';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" >
        <Box sx={{ bgcolor: 'white', height: '100%', padding: '10px', paddingBottom: '100px', display: 'flex', flexDirection: 'column', gap: '10px' }}>

            <IntroWriter />

            {/* Product */}
          <MainProduct />
          <SecondProduct />
          <ThirdProduct />
          <FourthProduct />
          <FifthProduct />
          {/* Facebook Comments */}
          <FacebookComments />
        </Box>
      </Container>
          {/* Footer */}
          <SubFooter />
          <Footer />
    </React.Fragment>
  );
}
