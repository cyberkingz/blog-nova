import React from 'react'
import IMG from '../img/DrDennis.png'
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
    <h1 style={{textAlign: 'center', marginBottom: '0', paddingBottom: '0'}}>Dr Dennis Gross</h1>
    <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>455€</h2>

    <p>Dit LED-masker brengt de dermatoloog naar uw huiskamer. Het ziet er ook enorm futuristisch uit, iets wat zo uit mijn broer zijn sci-fi series kan komen.</p>
    <p>We vonden dit door de FDA goedgekeurde rimpelbestrijdingsapparaat zeker goed qua kwaliteit, maar we kunnen de prijs gewoon niet rechtvaardigen. Het apparaat kost 455 euro. En nee dat is geen typefout.</p>
    <p>Hoewel het dus een geweldig LED-masker is, kunt u dezelfde perfecte resultaten voor uw huid behalen met een Novalight voor minder dan €200.</p>
  </div>
</div>

      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
