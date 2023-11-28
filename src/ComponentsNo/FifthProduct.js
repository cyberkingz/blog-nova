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
    <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>3483 NOK</h2>

    <p>Denne LED-masken tar virkelig hudlegekontoret hjem. Den ser også veldig futuristisk ut, noe min bror ville sammenligne med en av hans futuristiske show.</p>

    <p>Vi likte absolutt denne FDA-godkjente rynkebehandlingsenheten, men vi kan rett og slett ikke rettferdiggjøre prisen. Den koster 3483 NOK. Ingen skrivefeil.</p>

    <p>Så selv om det er en fantastisk LED-maske, kan du få de samme forbedrende resultatene for huden din fra Novalight for under 200 dollar.</p><br/>
  </div>
</div>




    </div>


    <Divider />

  </div>
  )
}

export default SecondProduct

