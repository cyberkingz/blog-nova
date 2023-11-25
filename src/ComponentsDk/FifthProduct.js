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
            <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>3098,55 DKK</h2>

            <p>Denne LED maske bringer hudlægens klinik hjem til dig. Den ser også ud som noget fra fremtiden, noget min bror ville se i et af hans science fiction shows.</p>
            <p>Vi kunne rigtig godt lide denne FDA godkendte enhed til bekæmpelse af rynker, men vi kan simpelthen ikke stå bag prisen. Den koster hele 3098,55 DKK. Ja, det er ikke en stavefejl.</p>
            <p>Så, selvom det er en god LED maske, kan du få de samme perfekte resultater til din hud med en maske fra Novalight til under 2008,95 DKK.</p>
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
