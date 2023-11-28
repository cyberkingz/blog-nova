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

    <p>Qure garantiza una precisión LED de grado clínico en sólo 3 minutos al día.</p>
    <p>Cuando suena demasiado bueno para ser verdad, a menudo lo es. Tal vez si lo usa durante más tiempo del que lo probamos, pero en 12 semanas a 3 minutos al día, no había cambiado mucho realmente.</p>
    <p>Aún así, es clínicamente seguro, así que no hará ningún daño.</p>
    <p>Pero se vende por 593,55€, lo que la convierte en una de las opciones más caras de nuestra lista.</p>
  </div>
</div>

      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
