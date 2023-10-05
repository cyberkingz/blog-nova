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

            <p>Le dermatologue s’installe chez vous avec ce masque à diodes électroluminescentes. Il a également un aspect visionnaire, que mon frère assimilerait à l'une de ses émissions futuristes.</p>
            <p>Nous avons vraiment aimé ce dispositif antirides approuvé par la FDA, mais nous ne pouvons tout simplement pas justifier son prix. Il coûte 455€. Ce n'est pas une faute de frappe.</p>
            <p>Bien qu'il s'agisse d'un excellent masque LED, vous pouvez obtenir les mêmes résultats parfaits pour votre peau avec Novalight pour moins de 200€.</p>
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
