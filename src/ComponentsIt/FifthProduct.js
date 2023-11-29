import React from 'react'
import IMG from '../img/DrDennis.png'
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
            <h1 style={{textAlign: 'center', marginBottom: '0', paddingBottom: '0'}}>Dr Dennis Gross</h1>
            <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>432,80€</h2>

            <p>Questa maschera a LED porta decisamente a casa lo studio del dermatologo. Ha anche un aspetto futuristico, che mio fratello paragonerebbe a uno dei suoi spettacoli futuristici.</p>
<p>Abbiamo apprezzato questo dispositivo antirughe approvato dalla FDA, ma non possiamo giustificare il prezzo. Costa 455€. Non è un errore di battitura.</p>
<p>Sebbene si tratti di un'ottima maschera LED, potete ottenere gli stessi risultati di perfezionamento della pelle da Novalight per meno di 200€.</p>

          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
