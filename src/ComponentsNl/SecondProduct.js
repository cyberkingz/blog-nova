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
            <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>529,00€</h2>

            <p>Qure belooft klinische LED-precisie in slechts 3 minuten per dag.</p>
            <p>Nou, als dit te mooi klinkt om waar te zijn, dan is het dat ook. Misschien moet u het langer gebruiken dan wij hebben gedaan, maar in 12 weken met 3 minuten per dag was er niet echt veel veranderd.</p>
            <p>Toch is het klinisch veilig, dus het kan geen kwaad.</p>
            <p>Maar hij wordt verkocht voor € 529 en is daarmee een van de duurste opties uit onze lijst.</p>
          </div>
        </div>

      </div>

      <Divider />
    </div>
  )
}

export default SecondProduct;
