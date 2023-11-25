import React from 'react';
import IMG from '../img/Nova.jpg';
import { Check } from '@mui/icons-material';
import './MainProduct.css';
import { Box, Button, Divider, Typography } from '@mui/material';

function MainProduct() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>

    <div style={{ textAlign: 'left', width: '80%', margin: 'auto auto' }}>
      <div style={{ marginTop: '80px' }}>
        <p style={{ fontWeight: 'bold' }}>Pris</p>
        <p>Vi har opnået gode resultater med LED masker der koster under 1500 DKK. Faktisk er vores bedst bedømte maske den billigste løsning!</p>
        <Divider />
      </div>
  
      <div style={{ marginTop: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>Resultater</p>
        <p>Vi har brugt disse LED masker jævnligt, for at bedømme hvor lang tid det vil tage i at opnå mærkbare resultater hvad angår rynker og slap hud.</p>
        <Divider />
      </div>
  
      <div style={{ marginTop: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>Sikker til brug i hjemmet</p>
        <p>Hver eneste af disse lysterapimasker er godkendt af hudlæger og sikker til brug derhjemme.</p>
        <Divider />
      </div>
    </div>
  
    <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px', width: '100%', margin: 'auto auto' }}>
      <div className='img-container'>
        <img src={IMG} alt="" width={'50%'} className='productIMG' style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
        <h2 style={{ background: '#818cf8', color: 'white', width: '120px', margin: '15px auto', borderRadius: '25px' }}>1491,39 DKK</h2>
      </div>
  
      <div style={{ textAlign: 'left', padding: '20px', paddingBottom: '0px' }}>
      <div className='TextSection'>
  <h3>Hvorfor hudlæger vælger Novalights Regenmask som den bedste LED maske til hjemmet.</h3>
  <p>Vi elskede virkelig Regenmask, et produkt der har opnået en kæmpe popularitet. Lige nu kan du endda få 50% rabat på den også, hvilket gør den til den billigste LED maske du kan bruge derhjemme. Denne maske er i stand til at rense porerne og gøre huden klarere, samtidig med at den forhindrer tegn på for tidlig hudaldring i at sætte ind. Masken har også en del, der dækker halsen, som er et af de mest glemte områder for aldrende hud.</p>
  <p>Vi brugte den 20 minutter hver dag, som anbefalet af Novalight, siden de anbefaler at bruge den mellem 15 og 30 minutter dagligt. Det var nemt og behageligt at arbejde på at bekæmpe den skade som solens stråler har formået gennem årene. Og det er ikke uden grund at masken virker så godt... Den har LED teknologi der anvendes af NASA, og som hjælper dig behandle pigmenterne, rødme, tør hud og rynker. Til sidst i forsøget kunne vi ikke komme os over hvor glødende, fejlfri og smuk vores hud var blevet! Resultaterne er uden tvivl professionelle. Og med 50% rabat, betyder det en pris på blot 1491,39 DKK. Men skynd dig, du skal bestille den i dag for at kunne få den til denne fantastisk lave pris.</p>
</div>

  
        <div className="ListSection" style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography component="div">
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
              <Check sx={{ color: 'green', marginRight: '5px' }} /> Godkendt af hudlæger for hudens sikkerhed.
            </Box>
          </Typography>
          <Typography component="div">
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
              <Check sx={{ color: 'green', marginRight: '5px' }} /> Bruger LED teknologi fra NASA til behandling af huden.
            </Box>
          </Typography>
          <Typography component="div">
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
              <Check sx={{ color: 'green', marginRight: '5px' }} /> Dækker også nakken, et ofte overset område.
            </Box>
          </Typography>
          <Typography component="div">
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
              <Check sx={{ color: 'green', marginRight: '5px' }} /> Egnet til daglig brug, mellem 15-30 minutter per omgang.
            </Box>
          </Typography>
          <Typography component="div">
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
              <Check sx={{ color: 'green', marginRight: '5px' }} /> Lige nu tilgængelig med rabat til blot 1491,39 DKK.
            </Box>
          </Typography>
        </div>

      </div>
    </div>
  
    <div style={{ width: '100%' }}>
      <Button variant="contained" href="https://novalight-uk.com/da-da/products/masque-facial-avec-led-novalight" sx={{ fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', borderRadius: '10px' }}>👉 DET BEDSTE VALG</Button>
      <p>*Lagerbeholdningen er lav</p>
    </div>
  
    <Divider />
  </div>
  
  )
}

export default MainProduct;
