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
            <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>322,30€</h2>

            <p>Qure promet une précision LED de qualité clinique en seulement 3 minutes par jour.</p>
            <p>Lorsque qu’un produit semble trop beau pour être vrai, rien n’y fait. Peut-être faut-il l'utiliser plus longtemps que ce que nous avons testé, mais en 12 semaines à raison de 3 minutes par jour, nous n’avons pas remarqué de grands changements.</p>
            <p>Néanmoins, ce produit est cliniquement sûr, il ne peut donc pas faire de mal.</p>
            <p>En revanche, son prix de vente est de 593,55€, ce qui en fait l'une des options les plus chères de notre liste.</p>
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
