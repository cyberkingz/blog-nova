import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/Currentbody.jpg'

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
      <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>3463,60 SEK</h2>

      <p>Current Body har några fantastiska recensioner och blev till och med kändis i 'Emily in Paris,' den där showen på Netflix.</p>

      <p>Kanske skulle vi kalla det vårt näst bästa alternativ på listan eftersom det har en bekväm passform och visar lovande resultat, men till det här priset, som var 2973,60 SEK, kände vi en viss chock över priset.</p>

      <p>Varför betala mer när du kan få samma resultat för mindre än 2016,00 SEK? Det var vad vi tänkte!</p><br/>
      
      </div>

     
    </div>



    </div>


    <Divider />

  </div>
  )
}

export default SecondProduct
