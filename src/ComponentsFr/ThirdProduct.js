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
      <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>500€</h2>

      <p>Omnilux bénéficie d'une excellente garantie et d'un design confortable.</p>

      <p>Il est également un peu plus réaliste concernant les durées de traitement, indiquant que vous devriez l'utiliser pendant 10 minutes par session.</p>

      <p>Bien que nous ayons aimé la manière dont il améliorait la fermeté de la peau, il nous a fallu beaucoup plus de temps que ce que le site web promet pour 3 traitements par semaine pendant 4 semaines pour voir un changement.</p>
        
      <p>De plus, le prix, à 500€, reste élevé.</p><br/>

      </div>

     
    </div>

    </div>

    <Divider />

  </div>
  )
}

export default SecondProduct;
