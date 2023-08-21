import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/Currentbody.jpg'

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
      <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>£450.85</h2>

      <p>Current Body has some stellar reviews and was even propelled into stardom on ‘Emily in Paris,’ that show on Netflix.</p>

      <p>Maybe we’d name it our second favorite on the list as it does have a comfortable fit and shows some promising results, but at this price, which was £374.65, we felt a bit of sticker-shock.</p>

      <p>Why pay more when you can get the same results for less than £254.00 ? That’s what we thought!</p><br/>
      
      </div>

     
    </div>



    </div>


    <Divider />

  </div>
  )
}

export default SecondProduct