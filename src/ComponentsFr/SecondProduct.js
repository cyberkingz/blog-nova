import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/Qure.png'

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
        <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>675€</h2>

        <p>Qure promet une précision LED de qualité clinique en seulement 3 minutes par jour.</p>

        <p>Eh bien, quand cela semble trop beau pour être vrai, c'est le cas. Peut-être si vous l'utilisez plus longtemps que nous ne l'avons testé, mais en 12 semaines à 3 minutes par jour, pas grand-chose n'a vraiment changé.</p>

        <p>Cependant, il est cliniquement sûr, donc il ne causera aucun préjudice.</p>

        <p>Mais il est vendu au détail pour 675€, ce qui en fait l'une des options les plus chères de notre liste.</p><br/>
        </div>

       
      </div>

      </div>

      <Divider />

    </div>
  )
}

export default SecondProduct;
