import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/omni.jpg'

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
    <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>3031 NOK</h2>

    <p>Omnilux har en utmerket garanti og en praktisk design.</p>

    <p>Det er også litt mer realistisk når det gjelder behandlingstider og angir at du bør bruke det i 10 minutter per økt.</p>

    <p>Selv om vi likte hvordan det forbedret hudens fasthet, tok det mye lenger tid enn nettstedet lover, 3 behandlinger i uken i 4 uker, for å se en endring.</p>
      
    <p>I tillegg er prisen fortsatt høy, 3031 NOK.</p><br/>
  </div>
</div>




    </div>


    <Divider />

  </div>
  )
}

export default SecondProduct