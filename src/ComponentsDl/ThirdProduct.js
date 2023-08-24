import { Divider } from '@mui/material';
import React from 'react';
import IMG from '../img/omni.jpg';

function ThirdProduct() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px' }}>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px' }}>

        <div className='img-container'>
          <img className='productIMG' src={IMG} alt="" width={'50%'} style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
        </div>

        <div style={{ textAlign: 'center', padding: '0px', paddingBottom: '0px', width: '80%' }}>
          <div className='TextSection'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', paddingBottom: '0' }}>Ominlux</h1>
            <h2 style={{ textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px' }}>309€</h2>

            <p>Omnilux bietet eine ausgezeichnete Garantie und ein komfortables Design.</p>
            <p>Die LED-Maske ist auch etwas realistischer in Bezug auf die Behandlungszeiten und gibt an, dass man es für 10 Minuten pro Sitzung verwenden sollte.</p>
            <p>Obwohl wir die verbesserte Straffheit der Haut mochten, hat es bei uns viel länger gedauert als auf der Website versprochen. Nach 3 Behandlungen pro Woche über 4 Wochen hinweg konnten wir Veränderungen sehen.</p>
            <p>Zusätzlich ist der Preis von 309€ immer noch sehr hoch.</p>
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default ThirdProduct;
