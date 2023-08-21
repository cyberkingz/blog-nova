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
      <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>£577.85</h2>

      <p>This LED mask definitely brings the dermatologist’s office home. It looks so futuristic too, something my brother would liken to one of his futuristic shows.</p>

      <p>We definitely liked this FDA-cleared wrinkle-fighting device, but we simply can’t justify the price. It costs £577.85. Not a typo.</p>

      <p>So, while it is a great LED mask, you can get the same perfecting results for your skin from Novalight for under $254.00</p><br/>
      
      </div>

     
    </div>



    </div>


    <Divider />

  </div>
  )
}

export default SecondProduct

