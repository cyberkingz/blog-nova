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
          <p>Vi oppnådde gode resultater med LED-masker som kostet <strong>mindre enn 2500 NOK</strong>. Faktisk var vårt toppvalg det rimeligste alternativet!</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Resultater</p>
          <p>Vi brukte disse LED-maskene jevnlig for å avgjøre hvor lang tid det ville ta før merkbare resultater viste seg med reduksjon av rynker og slapphet.</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Sikre for hjemmebruk</p>
          <p>Hver enkelt lysbehandlingsmaske er godkjent av hudleger og trygg å bruke hjemme.</p>
          <Divider />
        </div>
      </div>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px', width: '100%', margin: 'auto auto' }}>
        <div className='img-container'>
          <img src={IMG} alt="" width={'50%'} className='productIMG' style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
        <h2 style={{background: '#818cf8', color: 'white', width: '160px', margin: '15px auto', borderRadius: '25px', paddingLeft: '10px', paddingRight: '10px'}}>2462 NOK</h2>
        </div>

        <div style={{ textAlign: 'left', padding: '20px', paddingBottom: '0px' }}>
          <div className='TextSection'>
            <h3>Hvorfor dermatologer valgte Novalights Regenmask som det beste LED-maskalternativet for hjemmebruk</h3>

            <p>Vi likte virkelig Regenmask, en produkt som har fått en stor følging. Akkurat nå er den også priset med 50% rabatt, noe som gjør den til den mest kostnadseffektive av LED-maskene du kan bruke hjemme. Denne masken kan rense porene og rense huden samtidig som den forhindrer at tegn på tidlig aldring tar over. Den har også en del som dekker halsen din, et av de mest oversette områdene for aldrende hud.</p>

            <p>Vi brukte den hver dag i 20 minutter per dag, slik Novalight anbefaler, som var mellom 15 og 30 minutter per dag. Det var enkelt og praktisk, samtidig som den jobbet med å bli kvitt tegn på solskader gjennom årene. Og det er ingen overraskelse at den fungerer så bra... Den har LED-teknologi som brukes av NASA for å hjelpe deg med å håndtere pigmentering, rødhet, tørr hud og rynker. Til slutt kunne vi ikke slutte å beundre hvor strålende, feilfri og vakker den etterlot huden vår! Resultatene er virkelig av profesjonell kvalitet. Og med 50% rabatt betyr det at den bare koster 2462 NOK. Men skynd deg, du må bestille den i dag for å få den til denne utrolig lave prisen.</p>
          </div>

          <div className="ListSection" style={{marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Godkjent av hudleger for hudens sikkerhet.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Bruker NASA's LED-teknologi for hudbehandling.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Dekker også halsen og retter seg mot et ofte oversett område.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Egnet for daglig bruk, med økter på 15-30 minutter.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> For øyeblikket tilgjengelig til en rabattert pris på 2462 NOK.
              </Box>
            </Typography>
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="contained" href="https://novalight-uk.com/no-no/products/masque-facial-avec-led-novalight" sx={{ fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', borderRadius: '10px' }}>👉 DET BESTE ALTERNATIVET</Button>
        <p>*Lageret begynner å bli tomt</p>
      </div>

      <Divider />
    </div>
  )
}


export default MainProduct;
