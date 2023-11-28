import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/DrDennis.png'

function SecondProduct() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px'}}>
    

    <div className='imgTextWrapper' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px'}}>

    <div className='img-container'>
      <img className='productIMG' src={IMG} alt="" width={'50%'} style={{borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)'}}/>
    </div>


    <div style={{ textAlign: 'center', padding: '0px', paddingBottom: '0px', width: '80%' }}>
      <div className='TextSection'>
      <h1 style={{textAlign: 'center', marginBottom: '0', paddingBottom: '0'}}>Dr. Dennis Gross</h1>
      <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>4391,35 SEK</h2>

      <p>Den här LED-masken tar verkligen med sig hudläkarens kontor hem. Den ser också väldigt futuristisk ut, något min bror skulle likna vid en av sina futuristiska shower.</p>

      <p>Vi gillade definitivt den här FDA-godkända rynkbekämpande enheten, men vi kan helt enkelt inte rättfärdiga priset. Den kostar 4586,40 SEK. Inget skrivfel.</p>

      <p>Så även om det är en fantastisk LED-mask kan du få samma perfekterande resultat för din hud från Novalight för under 2500,00 SEK.</p><br/>
      
      </div>

     
    </div>



    </div>


    <Divider />

  </div>
  )
}

export default SecondProduct
