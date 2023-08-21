import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/Qure.png'

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
        <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>£415</h2>

        <p>Qure promises clinical-grade LED precision in just 3 minutes a day.</p>

        <p>Well, when it sounds too good to be true, it is. Maybe if you use it for longer than we tested it for, but in 12 weeks at 3 minutes a day, not much had really changed.</p>

          <p>Still, it is clinically safe, so it won’t do any harm.</p>

          <p>But it retails for £415, making it one of the most expensive options on our list.</p><br/>
        </div>

       
      </div>



      </div>


      <Divider />

    </div>
  )
}

export default SecondProduct