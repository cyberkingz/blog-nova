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
            <h1 style={{ textAlign: 'center', marginBottom: '0', paddingBottom: '0' }}>Omnilux</h1>
            <h2 style={{ textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px' }}>360€</h2>

            <p>Omnilux bietet eine ausgezeichnete Garantie und ein komfortables Design.</p>

            <p>Es ist auch realistischer in Bezug auf die Behandlungsdauer und gibt an, dass Sie es 10 Minuten pro Sitzung verwenden sollten.</p>

            <p>Obwohl wir mochten, wie es die Festigkeit der Haut verbesserte, hat es viel länger gedauert als auf der Website versprochen, bei 3 Behandlungen pro Woche für 4 Wochen eine Veränderung zu sehen.</p>
            
            <p>Außerdem ist der Preis mit 360€ immer noch hoch.</p><br/>

          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default ThirdProduct;
