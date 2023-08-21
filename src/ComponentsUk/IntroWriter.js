import React from 'react'
import Img from '../img/writer.png'

function IntroWriter() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px', borderRadius: '10px'}}>
    <img src={Img} alt="" width="80px" style={{borderRadius: '100%', margin: 'auto auto'}}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
        <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Written by Judy Phillips</p>
        <p style={{fontStyle: 'italic'}}>Wrinkle Specialist & Senior Editor</p>
      </div>
    </div>

    <div>
          <p style={{fontSize: '12px', textAlign: 'center'}}>*We only recommend products we personally tested & loved.</p>


      <div style={{textAlign: 'left', width: '80%', margin: 'auto auto'}}>
          <p>With skin issues such as <strong>sagging, wrinkles, breakouts, and inflammation</strong>, we set out to find the <strong>top 5 light therapy masks</strong> known for <strong>improving and rejuvenating a gorgeous and youthful complexion.</strong></p>
          <p></p>
          <p>Light therapy or LED masks have been incredibly popular in recent years. <strong>At first, this type of treatment was only available through your dermatologist or an aesthetician.</strong></p>
          <p></p>
          <p><strong>Now, you can get those same treatments at home.</strong> As age marches across your face, you may have sought different ways to turn back the cruel hands of time.</p>
          <p></p>
          <p>However, <strong>an in-office visit could cost as much as £380.00 per session, depending on your location.</strong> Since LED therapy is never a one-and-done deal,<strong> it only makes sense to find a light therapy mask you can use to achieve those same results at home</strong></p>
          <p></p>
          <p>We tested 25 LED masks including models from Qure, Novalight, and OmniLux. <strong>Then we rated the 5 best options based on the following criteria:</strong></p>
          <p></p> 
     </div>



        </div>
        
    </>
  )
}

export default IntroWriter


