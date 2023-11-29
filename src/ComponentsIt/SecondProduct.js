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
            <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>593€</h2>

            <p>Qure promette una precisione LED di livello clinico in soli 3 minuti al giorno.</p>
            <p>Quando sembra troppo bello per essere vero, è così. Forse se lo si usa per un periodo più lungo di quello che abbiamo testato, ma in 12 settimane con 3 minuti al giorno non è cambiato molto.</p>
            <p>Tuttavia, è clinicamente sicuro, quindi non farà alcun male.</p>
            <p>Ma il prezzo di vendita è di 593€, il che lo rende una delle opzioni più costose della nostra lista.</p>

          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
