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
            <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>355$</h2>

            <p>Current Body a reçu des critiques élogieuses et a même été propulsé au rang de star par la série Emily in Paris sur Netflix.</p>
            <p>Nous le classerions peut-être au deuxième rang des favoris de la liste, car il est confortable et donne des résultats prometteurs, mais au prix de 295 $, nous avons eu un peu de mal à nous y retrouver.</p>
            <p>Pourquoi payer plus quand on peut obtenir les mêmes résultats pour moins de 200 euros ? Nous sommes d’accord !</p>
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
