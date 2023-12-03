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
          <p style={{ fontWeight: 'bold' }}>Kostnad</p>
          <p>Vi fick bra resultat med LED-masker som kostade mindre än 2500 SEK. Faktum är att vårt toppval var det billigaste alternativet!</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Resultat</p>
          <p>Vi använde dessa LED-masker regelbundet för att avgöra hur lång tid det skulle ta innan märkbara resultat visades för att minska rynkor och slapphet.</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Säkra för hemmabruk</p>
          <p>Varje enskild ljusbehandlingsmask är godkänd av hudläkare och säker att använda hemma.</p>
          <Divider />
        </div>
      </div>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px', width: '100%', margin: 'auto auto' }}>
        <div className='img-container'>
          <img src={IMG} alt="" width={'50%'} className='productIMG' style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
        <h2 style={{background: '#818cf8', color: 'white', width: 'fit-content', margin: '15px auto', borderRadius: '25px', paddingLeft: '20px', paddingRight: '20px'}}>2405,00 SEK</h2>
        </div>

        <div style={{ textAlign: 'left', padding: '20px', paddingBottom: '0px' }}>
          <div className='TextSection'>
            <h3>Varför dermatologer valde Novalights Regenmask som det bästa LED-maskalternativet för hemmabruk</h3>

            <p>Vi älskade verkligen Regenmask, en produkt som har fått en stor följande. Just nu är den dessutom 50% rabatterad, vilket gör den till den mest prisvärda av LED-maskerna som du kan använda hemma. Den här masken kan rensa porer och rena huden samtidigt som den förhindrar att tecken på förtida åldrande tar över. Den har också en del som täcker din hals, ett av de mest förbisedda områdena för åldrande hud.</p>

            <p>Vi använde den varje dag i 20 minuter per dag, som Novalight föreslår att man gör mellan 15 och 30 minuter per dag. Det var enkelt och bekvämt, samtidigt som den arbetade med att bli av med tecken på solskador genom åren. Och det är ingen överraskning att den fungerar så bra... Den har LED-teknik som används av NASA för att hjälpa dig att hantera pigmentering, rodnad, torr hud och rynkor. Slutligen kunde vi inte sluta beundra hur strålande, felfri och vacker den lämnade vår hud! Resultaten är verkligen av professionell kvalitet. Och med 50% rabatt innebär det att den bara kostar 2 405 SEK. Men skynda dig, du måste beställa den idag för att få den till det här fantastiskt låga priset.</p>
          </div>

          <div className="ListSection" style={{marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Godkänd av hudläkare för hudens säkerhet.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Använder NASA:s LED-teknik för hudbehandling.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Täcker också halsen och riktar sig mot ett ofta förbisedd område.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Lämplig för daglig användning, med sessioner på 15-30 minuter.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> För närvarande tillgänglig till ett rabatterat pris av 2405,00 SEK.
              </Box>
            </Typography>
          </div>

        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="contained" href="https://novalight-north.com/sv-sw/products/masque-facial-avec-led-novalight" sx={{ fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '15px', borderRadius: '10px' }}>👉 DET BÄSTA ALTERNATIVET</Button>
        <p>*Lagret börjar ta slut</p>
      </div>

      <Divider />
    </div>
  )
}

export default MainProduct;
