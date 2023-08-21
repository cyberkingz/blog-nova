import { Divider } from '@mui/material';
import React from 'react';
import IMG from '../img/Qure.png';

function SecondProduct() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px' }}>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px' }}>

        <div className='img-container'>
          <img className='productIMG' src={IMG} alt="" width={'50%'} style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
        </div>

        <div style={{ textAlign: 'center', padding: '0px', paddingBottom: '0px', width: '80%' }}>
          <div className='TextSection'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', paddingBottom: '0' }}>Qure</h1>
            <h2 style={{ textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px' }}>485€</h2>

            <p>Qure verspricht klinisch genaue LED-Präzision in nur 3 Minuten pro Tag.</p>

            <p>Nun, wenn es zu schön klingt, um wahr zu sein, dann ist es das auch. Vielleicht, wenn Sie es länger verwenden, als wir es getestet haben, aber in 12 Wochen bei 3 Minuten pro Tag hat sich nicht viel wirklich geändert.</p>

            <p>Es ist jedoch klinisch sicher, also wird es keinen Schaden verursachen.</p>

            <p>Aber es wird im Einzelhandel für 485€ verkauft, was es zu einer der teuersten Optionen auf unserer Liste macht.</p><br />
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
