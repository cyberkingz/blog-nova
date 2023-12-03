import React from 'react'
import IMG from '../img/Currentbody.jpg'
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
    <h1 style={{textAlign: 'center', marginBottom: '0', paddingBottom: '0'}}>Current Body</h1>
    <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>355€</h2>

    <p>Current Body heeft een aantal uitstekende recensies en werd zelfs tot sterrendom verheven in 'Emily in Paris', een serie op Netflix.</p>
    <p>Het zou een goede tweede favoriet uit onze lijst zijn, omdat het een comfortabele pasvorm heeft en veelbelovende resultaten laat zien, maar de prijs van €295 vinden wij wat aan de hoge kant.</p>
    <p>Waarom meer betalen als u dezelfde resultaten voor minder dan €200 kunt krijgen? Dat vonden wij in ieder geval!</p>
  </div>
</div>

      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
