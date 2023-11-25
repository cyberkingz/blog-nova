import React from 'react'
import IMG from '../img/omni.jpg'
import { Divider } from '@mui/material';

function SecondProduct() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px'}}>
      <div className='imgTextWrapper' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px'}}>

        <div className='img-container'>
          <img className='productIMG' src={IMG} alt="" width={'50%'} style={{borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)'}}/>
        </div>

        <div style={{ textAlign: 'center', padding: '0px', paddingBottom: '0px', width: '80%' }}>
          <div className='TextSection'>
            <h1 style={{textAlign: 'center', marginBottom: '0', paddingBottom: '0'}}>Omnilux</h1>
            <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>2689,95 DKK</h2>

            <p>Omnilux kommer med et behageligt design og en fremragende garanti.</p>
            <p>Den er også lidt mere realistisk hvad angår behandlingstiderne, da du anbefales at bruge den 10 minutter pr brug.</p>
            <p>Mens vi godt kunne lide hvordan den strammede huden op, tog det os meget længere tid at se resultater, end hvad hjemmesiden lovede, med 3 behandlinger om ugen i 4 uger.</p>
            <p>Samtidig er prisen på 2689,95 DKK også ret høj.</p>
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
