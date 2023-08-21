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
          <p style={{ fontWeight: 'bold' }}>Kosten</p>
          <p>Wir haben hervorragende Ergebnisse mit LED-Masken erzielt, die weniger als <strong>300€</strong> kosten. Tatsächlich war unsere erste Wahl die günstigste Option!</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Ergebnisse</p>
          <p>Wir haben diese LED-Masken regelmäßig verwendet, um herauszufinden, wie lange es dauert, um bemerkenswerte Ergebnisse bei der Reduzierung von Falten und Hauterschlaffung zu erzielen.</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Sicher für den Hausgebrauch</p>
          <p>Jede dieser Phototherapie-Masken ist von einem Dermatologen zugelassen und sicher für den Hausgebrauch.</p>
          <Divider />
        </div>
      </div>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px', width: '100%', margin: 'auto auto' }}>
        <div className='img-container'>
          <img src={IMG} alt="" width={'50%'} className='productIMG' style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
        <h2 style={{background: '#818cf8', color: 'white', width: '120px', margin: '15px auto', borderRadius: '25px'}}>179€</h2>
        </div>

        <div style={{ textAlign: 'left', padding: '20px', paddingBottom: '0px' }}>
          <div className='TextSection'>
            <h3>Warum Dermatologen die Regenmask von Novalight als die beste LED-Maskenoption für zu Hause gewählt haben</h3>
            <p>Wir lieben absolut die Regenmask, ein Produkt, das enorm an Popularität gewonnen hat. Derzeit gibt es einen Rabatt von 50%, was es zur erschwinglichsten LED-Maske für den Hausgebrauch macht. Diese Maske kann Poren freisetzen und die Haut reinigen, während sie Anzeichen vorzeitiger Hautalterung vorbeugt. Sie deckt auch den Hals ab, ein Bereich, der oft bei der Hautalterung übersehen wird.</p>
            <p>Wir haben es täglich für 20 Minuten verwendet, wie Novalight empfiehlt, zwischen 15 und 30 Minuten pro Tag. Es war einfach und komfortabel und half uns, die Anzeichen von Sonneneinstrahlung über die Jahre loszuwerden. Kein Wunder, dass es so gut funktioniert... Es verwendet die LED-Technologie der NASA, um Pigmentierungsprobleme, Rötungen, trockene Haut und Falten zu behandeln. Am Ende waren wir von dem Glanz, der Perfektion und der Schönheit unserer Haut überwältigt! Die Ergebnisse sind wirklich professionell. Und mit 50% Rabatt kostet es nur 179€. Aber beeilen Sie sich, Sie müssen es heute bestellen, um diesen unglaublich niedrigen Preis zu bekommen.</p>
          </div>

          <div className="ListSection" style={{marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Von Dermatologen für die Hautsicherheit zugelassen.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Verwendet die NASA LED-Technologie für die Hautbehandlung.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Deckt auch den Hals ab, zielt auf einen oft übersehenen Bereich ab.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Geeignet für den täglichen Gebrauch, mit Sitzungen von 15 bis 30 Minuten.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Derzeit zu einem reduzierten Preis von 179€ erhältlich.
              </Box>
            </Typography>
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="contained" href="https://novalight-uk.com/products/masque-facial-avec-led-novalight" sx={{ fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', borderRadius: '10px' }}>👉 Die beste Option</Button>
        <p>*Der Bestand nimmt ab</p>
      </div>

      <Divider />
    </div>
  )
}

export default MainProduct;
