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

        <div style={{ textAlign: 'center', padding: '0px', paddingBottom: '0px',width: '80%' }}>
  <div className='TextSection'>
    <h1 style={{textAlign: 'center', marginBottom: '0', paddingBottom: '0'}}>Omnilux</h1>
    <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>395,00€</h2>

    <p>Omnilux heeft een uitstekende garantie en een comfortabel design.</p>
    <p>Het is ook iets realistischer wat betreft de behandeltijden, met de vermelding dat u het 10 minuten per sessie moet gebruiken.</p>
    <p>Hoewel we het fijn vonden hoe het de strakheid van de huid verbeterde, duurde het veel langer dan wat de website belooft voor 3 behandelingen per week gedurende 4 weken om een verandering te zien.</p>
    <p>Bovendien is de prijs met €395 nog steeds erg hoog.</p>
  </div>
</div>

      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
