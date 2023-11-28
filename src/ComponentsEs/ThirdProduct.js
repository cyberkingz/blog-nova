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

            <p>Omnilux tiene una garantía excelente y un diseño cómodo.</p>
            <p>También es un poco más realista con los tiempos de tratamiento, indicando que debe utilizarlo durante 10 minutos por sesión.</p>
            <p>Aunque nos gustó cómo mejoró la tirantez de la piel, tardamos mucho más de lo que promete la página web de 3 tratamientos a la semana durante 4 semanas en ver un cambio.</p>
            <p>Además, el precio, de 450,00€, sigue siendo elevado.</p>
          </div>
        </div>

      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
