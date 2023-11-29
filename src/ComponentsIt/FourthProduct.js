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

    <p>Current Body ha ricevuto recensioni stellari ed è stato persino portato alla ribalta da "Emily in Paris", una serie su Netflix.</p>
    <p>Forse lo definiremmo il nostro secondo preferito della lista, perché ha una vestibilità comoda e mostra risultati promettenti, ma a questo prezzo, 349€, abbiamo provato un po' di shock da bacchetta.</p>
    <p>Perché pagare di più quando si possono ottenere gli stessi risultati con meno di 200€ ? Questo è ciò che abbiamo pensato!</p>
  </div>
</div>

      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
