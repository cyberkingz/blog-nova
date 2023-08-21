import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/DrDennis.png'

function SecondProduct() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px'}}>
    

    <div className='imgTextWrapper' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px'}}>

    <div className='img-container'>
      <img className='productIMG' src={IMG} alt="" width={'50%'} style={{borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)'}}/>
    </div>


    <div style={{ textAlign: 'center', padding: '0px', paddingBottom: '0px', width: '80%' }}>
      <div className='TextSection'>
      <h1 style={{textAlign: 'center', marginBottom: '0', paddingBottom: '0'}}>Dr. Dennis Gross</h1>
      <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>680€</h2>

      <p>Ce masque LED ramène vraiment le cabinet du dermatologue à la maison. Il a aussi un look très futuriste, quelque chose que mon frère comparerait à l'une de ses émissions futuristes.</p>

      <p>Nous avons vraiment aimé cet appareil de lutte contre les rides approuvé par la FDA, mais nous ne pouvons tout simplement pas justifier le prix. Il coûte 680€. Ce n'est pas une erreur de frappe.</p>

      <p>Alors, bien que ce soit un excellent masque LED, vous pouvez obtenir les mêmes résultats parfaits pour votre peau avec Novalight pour moins de 300€</p><br/>
      
      </div>

     
    </div>



    </div>


    <Divider />

  </div>
  )
}

export default SecondProduct
