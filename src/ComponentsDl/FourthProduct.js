import { Divider } from '@mui/material';
import React from 'react';
import IMG from '../img/Currentbody.jpg';

function SecondProduct() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px' }}>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px' }}>

        <div className='img-container'>
          <img className='productIMG' src={IMG} alt="" width={'50%'} style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
        </div>

        <div style={{ textAlign: 'center', padding: '0px', paddingBottom: '0px', width: '80%' }}>
          <div className='TextSection'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', paddingBottom: '0' }}>Current Body</h1>
            <h2 style={{ textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px' }}>330€</h2>

            <p>Current Body hat hervorragende Bewertungen erhalten und wurde sogar zum Star in "Emily in Paris", dieser Show auf Netflix, gemacht.</p>

            <p>Vielleicht würden wir es als unseren zweiten Favoriten auf der Liste bezeichnen, da es eine bequeme Passform hat und vielversprechende Ergebnisse zeigt, aber zu diesem Preis, der 375€ betrug, waren wir geschockt.</p>

            <p>Warum mehr zahlen, wenn man die gleichen Ergebnisse für weniger als 250€ erzielen kann? Das haben wir uns auch gedacht!</p><br/>
            
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
