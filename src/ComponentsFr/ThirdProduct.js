import React from 'react'
import IMG from '../img/omni.jpg'
import { Divider } from '@mui/material';

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
            <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>450,00€</h2>

            <p>Omnilux bénéficie d'une excellente garantie et d'un design confortable.</p>
            <p>Il est également un peu plus réaliste en ce qui concerne la durée des sessions, puisqu'il indique qu'il faut l'utiliser pendant 10 minutes par séance.</p>
            <p>Bien que nous ayons apprécié l'amélioration de la fermeté de notre peau, il nous a fallu beaucoup plus de temps que ce que promet le site web, à savoir 3 traitements par semaine pendant 4 semaines, pour constater un changement.</p>
            <p>De plus, le prix de 450,00€ demeure encore élevé.</p>
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
