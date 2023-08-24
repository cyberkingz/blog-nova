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
            <h1 style={{ textAlign: 'center', marginBottom: '0', paddingBottom: '0' }}>Dr. Dennis Groß</h1>
            <h2 style={{ textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px' }}>355€</h2>

            <p>Diese LED-Maske bringt definitiv das Gefühl einer Dermatologie Praxis nach Hause. Sie sieht sehr futuristisch aus, etwas, das mein Bruder mit einer seiner Lieblingsserien vergleichen würde.</p>
            <p>Wir mochten definitiv das von der FDA zugelassene Faltenbekämpfung Gerät, aber wir können den Preis einfach nicht nachvollziehen. Es kostet 355€. Kein Tippfehler.</p>
            <p>Obwohl es eine großartige LED-Maske ist, können Sie dieselben nahezu perfekten Ergebnisse für Ihre Haut von Novalight für unter 250€ erhalten.</p>
            
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default FifthProduct;
