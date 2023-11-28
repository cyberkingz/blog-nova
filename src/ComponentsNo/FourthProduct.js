import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/Currentbody.jpg'

function SecondProduct() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px'}}>
    

    <div className='imgTextWrapper' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px'}}>

    <div className='img-container'>
      <img className='productIMG' src={IMG} alt="" width={'50%'} style={{borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)'}}/>
    </div>


    <div style={{ textAlign: 'center', padding: '0px', paddingBottom: '0px', width: '80%' }}>
  <div className='TextSection'>
    <h1 style={{textAlign: 'center', marginBottom: '0', paddingBottom: '0'}}>Current Body</h1>
    <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>2747 NOK</h2>

    <p>Current Body har noen fantastiske anmeldelser og ble til og med berømt i 'Emily in Paris,' den showen på Netflix.</p>

    <p>Kanskje vi skulle kalle det vårt nest beste alternativ på listen, siden det har en behagelig passform og viser lovende resultater, men til denne prisen, som var 2747 NOK, følte vi en viss sjokk over prisen.</p>

    <p>Hvorfor betale mer når du kan få de samme resultatene for mindre enn 3000 NOK ? Det var hva vi tenkte!</p><br/>
  </div>
</div>




    </div>


    <Divider />

  </div>
  )
}

export default SecondProduct