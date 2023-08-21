import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import IMG from '../img/Nova.jpg';
import { Check } from '@mui/icons-material';
import './MainProduct.css';

function MainProduct() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <div style={{ textAlign: 'left', width: '80%', margin: 'auto auto' }}>

        <div style={{ marginTop: '80px' }}>
          <p style={{ fontWeight: 'bold' }}>Cost</p>
          <p>We found some great results with LED masks that cost <strong>less than $200</strong>. In fact, our top pick was the lowest-priced option!</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Results</p>
          <p>We used these LED masks regularly to determine how long it would take to present noticeable results for reducing wrinkles and sagging.</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Safe for At-Home Use</p>
          <p>Every single one of these light therapy masks is dermatologist approved and safe for use at home.</p>
          <Divider />
        </div>
      </div>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px', width: '100%', margin: 'auto auto' }}>
        <div className='img-container'>
          <img src={IMG} alt="" width={'50%'} className='productIMG' style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
        <h2 style={{background: '#818cf8', color: 'white', width: '120px', margin: '15px auto', borderRadius: '25px'}}>$195</h2>
        </div>

        <div style={{ textAlign: 'left', padding: '20px', paddingBottom: '0px' }}>
          <div className='TextSection'>
            <h3>Why Dermatologists Chose Novalight’s Regenmask as the Best At-Home LED Mask Option</h3>

            <p>We absolutely loved Regenmask, a product that has garnered a huge following. Right now, it’s 50% off too, making it the most affordable of the LED masks you can use at home. This mask is capable of unclogging pores and clearing up skin while preventing the signs of premature aging from taking over. It also has a part that covers your neck, one of the most forgotten areas for aging skin.</p>

            <p>We used it every day for 20 minutes per day as Novalight suggests to use it between 15 and 30 minutes per day. It was effortless and comfortable, all the while working on ridding us of the signs of sun exposure over the years. And no wonder it works so well… It has LED technology used by NASA to help you address pigmentation, redness, dry skin, and wrinkles. In the end, we couldn’t get over how radiant, flawless, and beautiful it left our skin! The results are truly professional grade. And at 50% off, that means it’s only $195. But hurry, you’ll need to order it today to get it at this amazingly low price.</p>
          </div>

          <div className="ListSection" style={{marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Dermatologist approved for skin safety.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Uses NASA's LED technology for skin treatment.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Also covers the neck, targeting a commonly overlooked area.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Suitable for daily use, with sessions of 15-30 minutes.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Currently available at a discounted price of $195.
              </Box>
            </Typography>
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="contained" href="https://novalight-uk.com/products/masque-facial-avec-led-novalight" sx={{ fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', borderRadius: '10px' }}>👉 Visit Their Site</Button>
        <p>*Stock is running low</p>
      </div>

      <Divider />
    </div>
  )
}

export default MainProduct;
