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
      <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>3822,33 SEK</h2>

      <p>Omnilux har en utmärkt garanti och en bekväm design.</p>

      <p>Det är också lite mer realistiskt när det gäller behandlingstider och anger att du bör använda det i 10 minuter per session.</p>

      <p>Även om vi gillade hur det förbättrade hudens fasthet tog det oss mycket längre tid än vad webbplatsen lovar, 3 behandlingar i veckan i 4 veckor, för att se en förändring.</p>
        
        <p>Dessutom är priset fortfarande högt, 3981,60 SEK.</p><br/>

      </div>

     
    </div>



    </div>


    <Divider />

  </div>
  )
}

export default SecondProduct
