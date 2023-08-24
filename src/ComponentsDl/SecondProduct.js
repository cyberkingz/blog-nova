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
            <h2 style={{ textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px' }}>415€</h2>

            <p>Qure verspricht klinische Präzision bei LED-Anwendung innerhalb von nur 3 Minuten täglich.</p>

            <p>Nun, wenn es zu gut klingt, um wahr zu sein, ist es oftmals auch so. Eventuell, wenn man es länger verwendet als wir es getestet haben, aber nach 12 Wochen mit 3 minütiger Anwendung pro Tag hat sich nicht viel verändert.</p>

            <p>Trotzdem ist es medizinisch betrachtet sicher, also wird es keinen Schaden anrichten.</p>

            <p>Allerdings kostet es 415€, was es zu einer der teuersten Optionen auf unserer Liste macht.</p>
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
