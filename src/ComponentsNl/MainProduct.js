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
          <p style={{ fontWeight: 'bold' }}>Kosten</p>
          <p>We hebben geweldige resultaten ervaren met LED-maskers die minder dan <strong>200 euro</strong> kosten. Onze nummer 1 is zelfs het apparaat met de laagste prijs!</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Resultaten</p>
          <p>We gebruikten deze LED-maskers regelmatig om te bepalen hoe lang het zou duren voordat we merkbare resultaten zouden zien voor het verminderen van rimpels en oneffenheden.</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Veilig voor thuisgebruik</p>
          <p>Al deze lichttherapie maskers zijn goedgekeurd door dermatologen en veilig voor thuisgebruik.</p>
          <Divider />
        </div>
      </div>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px', width: '100%', margin: 'auto auto' }}>
        <div className='img-container'>
          <img src={IMG} alt="" width={'50%'} className='productIMG' style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
          <h2 style={{ background: '#818cf8', color: 'white', width: '120px', margin: '15px auto', borderRadius: '25px' }}>179,00€</h2>
        </div>

        <div style={{ textAlign: 'left', padding: '20px', paddingBottom: '0px' }}>
          <div className='TextSection'>
            <h3>Waarom dermatologen Regenmask van Novalight hebben gekozen als beste optie voor LED-maskers voor thuis</h3>
            <p>We waren helemaal weg van Regenmask, een product dat de laatste tijd een grote aanhang heeft gekregen. Op dit moment is het ook nog eens 50% afgeprijsd, waardoor het tevens ook het meest betaalbare LED-masker is voor thuis gebruik. Dit masker is in staat om poriën te ontstoppen en de huid te zuiveren, terwijl het voorkomt dat de tekenen van vroegtijdige veroudering de overhand nemen. Het heeft ook een onderdeel dat uw hals bedekt, een van de meest vergeten gebieden voor huidveroudering.</p>
            <p>We gebruikten het apparaat elke dag voor 20 minuten, terwijl Novalight voorstelt om het apparaat tussen de 15 en 30 minuten per dag te gebruiken. Het werkte moeiteloos en comfortabel. Zo hielp het ons bijvoorbeeld om tekenen van blootstelling aan de zon door de jaren heen te verwijderen. Geen wonder dat het zo goed werkt... Het heeft LED-technologie die ook door NASA wordt gebruikt om pigmentatie, roodheid, droge huid en rimpels aan te pakken. Uiteindelijk konden we er niet over uit hoe stralend, vlekkeloos en mooi onze huid erdoor werd! De resultaten zijn echt professioneel. En met 50% korting kost het apparaat maar 179,00€. Maar wees wel snel, u heeft alleen vandaag nog om het apparaat voor deze verbazingwekkend lage prijs te krijgen.</p>
          </div>

          <div className="ListSection" style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Dermatologisch goedgekeurd voor huidveiligheid.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Maakt gebruik van NASA's LED-technologie voor huidbehandeling.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Ook geschikt voor de hals, een gebied dat vaak over het hoofd wordt gezien. Geschikt voor dagelijks gebruik, met sessies van 15-30 minuten.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Momenteel verkrijgbaar tegen een gereduceerde prijs van 179,00€.
              </Box>
            </Typography>
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="contained" href="https://novalight-nl.com/products/masque-facial-avec-led-novalight" sx={{ fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', borderRadius: '10px' }}>👉 DE BESTE OPTIE</Button>
        <p>*De voorraad gaat snel</p>
      </div>

      <Divider />
    </div>
  )

}

export default MainProduct;
