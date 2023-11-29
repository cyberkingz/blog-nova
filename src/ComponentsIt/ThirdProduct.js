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

            <p>Omnilux ha un'ottima garanzia e un design confortevole.</p>
            <p>È anche un po' più realistico per quanto riguarda i tempi di trattamento, affermando che si dovrebbe usare per 10 minuti a sessione.</p>
            <p>Anche se ci è piaciuto come ha migliorato la tenuta della pelle, abbiamo impiegato molto più tempo di quanto promesso dal sito web con 3 trattamenti a settimana per 4 settimane per vedere un cambiamento.</p>
            <p>Inoltre, il prezzo, pari a 450€, è ancora elevato.</p>

          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
