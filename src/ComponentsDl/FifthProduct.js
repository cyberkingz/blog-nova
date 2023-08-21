import { Divider } from '@mui/material';
import React from 'react';
import IMG from '../img/DrDennis.png';

function FifthProduct() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px' }}>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px' }}>

        <div className='img-container'>
          <img className='productIMG' src={IMG} alt="" width={'50%'} style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
        </div>

        <div style={{ textAlign: 'center', padding: '0px', paddingBottom: '0px', width: '80%' }}>
          <div className='TextSection'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', paddingBottom: '0' }}>Dr. Dennis Gross</h1>
            <h2 style={{ textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px' }}>415€</h2>

            <p>Diese LED-Maske bringt wirklich die Arztpraxis nach Hause. Sie hat auch ein sehr futuristisches Aussehen, etwas, das mein Bruder mit einer seiner futuristischen Shows vergleichen würde.</p>

            <p>Wir mochten dieses FDA-zugelassene Gerät zur Faltenbekämpfung wirklich, aber wir können den Preis einfach nicht rechtfertigen. Es kostet 415€. Das ist kein Tippfehler.</p>

            <p>Also, obwohl es eine ausgezeichnete LED-Maske ist, können Sie mit Novalight für weniger als 300€ die gleichen perfekten Ergebnisse für Ihre Haut erzielen.</p><br/>
            
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default FifthProduct;
