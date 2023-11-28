import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/Qure.png'

function SecondProduct() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px'}}>
    

      <div className='imgTextWrapper' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px'}}>

      <div className='img-container'>
        <img className='productIMG' src={IMG} alt="" width={'50%'} style={{borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)'}}/>
      </div>


      <div style={{ textAlign: 'center', padding: '0px', paddingBottom: '0px', width: '80%' }}>
  <div className='TextSection'>
    <h1 style={{textAlign: 'center', marginBottom: '0', paddingBottom: '0'}}>Qure</h1>
    <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>4071 NOK</h2>

    <p>Qure lover klinisk presisjon med LED-teknologi på bare 3 minutter om dagen.</p>

    <p>Når det høres for godt ut til å være sant, er det det. Kanskje hvis du bruker det lengre enn vi testet det i, men etter 12 uker med 3 minutter om dagen hadde det ikke skjedd mye endring.</p>

    <p>Det er fortsatt klinisk trygt, så det vil ikke skade.</p>

    <p>Men prisen er 4071 NOK, noe som gjør det til et av de dyreste alternativene på listen vår.</p><br/>
  </div>
</div>




      </div>


      <Divider />

    </div>
  )
}

export default SecondProduct