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
          <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>349€</h2>

          <p>Current Body tiene algunas críticas estelares e incluso fue lanzada al estrellato en 'Emily en París', el programa de Netflix.</p>
          <p>Tal vez lo nombraríamos nuestro segundo favorito de la lista, ya que tiene un ajuste cómodo y muestra algunos resultados prometedores, pero a este precio, que era de 349 euros, sentimos un poco de impacto.</p>
          <p>¿Por qué pagar más cuando puede obtener los mismos resultados por menos de 250 dólares? Eso es lo que pensamos.</p>
        </div>
      </div>

      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
