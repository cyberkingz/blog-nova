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
          <p><strong>Kosten</strong></p>
          <p>Wir haben mit LED-Masken, die weniger als <strong>250€</strong> kosten, großartige Ergebnisse erzielt. Tatsächlich war unsere erste Wahl die günstigste Option!</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p><strong>Ergebnisse</strong></p>
          <p>Wir haben diese LED-Masken regelmäßig benutzt, um herauszufinden, wie lange es dauern würde, bis deutliche Ergebnisse bei der Reduzierung von Falten und Erschlaffung sichtbar werden.</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p><strong>Sicherheit für den Heimgebrauch</strong></p>
          <p>Jede einzelne dieser Lichttherapie-Masken ist von Dermatologen zugelassen und sicher für die Anwendung von zu Hause.</p>
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
            <h3>Warum Dermatologen die Regenmask(e) von Novalight als beste Option für eine LED-Maske für den Heimgebrauch ausgewählt haben.</h3>
            <p>Wir waren absolut begeistert von der Regenmask(e), einem Produkt, mit einer großen Fangemeinde. Zurzeit gibt es sogar einen 50%igen Rabatt, was sie zur kostengünstigsten LED-Maske für den Heimgebrauch macht. Diese Maske hat die Fähigkeit, Poren und Haut optimal zu reinigen, während sie gleichzeitig das Voranschreiten vorzeitiger Hautalterung verhindert. Zudem enthält sie einen Bereich, der Ihren Hals abdeckt – eine der am häufigsten vernachlässigten Zonen bei alternder Haut.</p>
            <p>Wir haben sie täglich 20 Minuten lang verwendet, wie von Novalight empfohlen, da es zwischen 15 und 30 Minuten pro Tag verwendet werden soll. Es war mühelos und komfortabel, während es gleichzeitig daran arbeitete, die Folgen jahrelanger Sonnenexposition zu mildern. Und es ist auch kein Wunder, dass es so gut funktioniert: Die Regenmask(e) benutzt LED-Technologie, die auch von der NASA verwendet wird, um Pigmentierung, Rötungen, trockene Haut und Falten zu behandeln. Am Ende konnten wir nicht glauben, wie strahlend, makellos und schön die Haut aussah! Die Ergebnisse sind wirklich von professioneller Qualität. Und mit 50% Rabatt kostet sie nur 179€. Besser beeilen Sie sich, Sie sollten das Produkt noch heute bestellen, um es zu diesem erstaunlich niedrigen Preis zu erhalten.</p>
          </div>

          <div className="ListSection" style={{marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Von Dermatologen für Haussicherheit zugelassen.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Verwendet LED-Technologie der NASA für die Hautbehandlung.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Deckt auch den Hals ab, um eine häufig übersehene Region zu behandeln.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Für den täglichen Gebrauch geeignet mit Sitzungen von 15-30 Minuten.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Aktuell zum reduzierten Preis von 179€ erhältlich.
              </Box>
            </Typography>
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="contained" href="https://novalight-uk.com/de-de/products/masque-facial-avec-led-novalight" sx={{ fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', borderRadius: '10px' }}>Die Beste Variante</Button>
        <p>*Nur noch begrenzte Stückzahl verfügbar</p>
      </div>

      <Divider />
    </div>
  )
}

export default MainProduct;
