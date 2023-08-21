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
      <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>450€</h2>

      <p>Current Body a reçu d'excellentes critiques et a même été propulsé au rang de star dans 'Emily à Paris', cette émission sur Netflix.</p>

      <p>Peut-être le nommerions-nous notre deuxième favori sur la liste car il a une coupe confortable et montre des résultats prometteurs, mais à ce prix, qui était de 375€, nous avons ressenti un choc.</p>

      <p>Pourquoi payer plus cher quand vous pouvez obtenir les mêmes résultats pour moins de 250€ ? C'est ce que nous avons pensé !</p><br/>
      
      </div>

     
    </div>

    </div>

    <Divider />

  </div>
  )
}

export default SecondProduct;
