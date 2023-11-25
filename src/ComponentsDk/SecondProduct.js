import React from 'react'
import IMG from '../img/Qure.png'
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
            <h1 style={{textAlign: 'center', marginBottom: '0', paddingBottom: '0'}}>Qure</h1>
            <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>3602,49 DKK</h2>

            <p>Qure lover LED præcision med præcision som klinikkerne tilbyder, på blot 3 minutter om dagen.</p>
            <p>Når det lyder for godt til at være sandt, så er det netop dette. Måske kan du opnå resultater hvis du bruger den længere tid end hvad vi testede med, men i løbet af 12 uger med 3 minutters daglig brug, opdagede vi ikke rigtigt nogle forandringer.</p>
            <p>Den er stadig klinisk godkendt, så den skader i det mindste ikke.</p>
            <p>Men den sælger for 3602,49 DKK, hvilket gør den til en af de dyreste løsninger på listen.</p>
        </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
