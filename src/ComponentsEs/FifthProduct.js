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

            <p>Esta mascarilla LED definitivamente lleva el consultorio del dermatólogo a casa. Además, tiene un aspecto muy futurista, algo que mi hermano compararía con uno de sus programas futuristas.</p>
            <p>Definitivamente nos gustó este dispositivo para combatir las arrugas aprobado por la FDA, pero simplemente no podemos justificar el precio. Cuesta 455 euros. No es una errata.</p>
            <p>Así que, aunque es una gran máscara LED, puede obtener los mismos resultados perfeccionadores para su piel de Novalight por menos de 250 euros.</p>
          </div>
        </div>

      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
