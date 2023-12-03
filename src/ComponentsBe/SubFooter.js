import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/logo.png'

function SubFooter() {
  return (
    <div style={{padding: '10px', marginTop: '50px', background: 'white', paddingBottom: '20px', paddingTop: '20px'}}>

        <div>
            <img src={IMG} alt="" style={{filter: 'invert(1)', width: '300px'}}/>
            <p style={{marginTop: '0px', fontSize: '12px'}}><strong>*We bevelen alleen producten aan die we persoonlijk hebben getest en zelf ook geweldig vinden.</strong><br/>
            We verdienen aan de keren dat er op 4 van de genoemde productlinks wordt geklikt.</p>
            <Divider sx={{mt: 5}}/>
        </div>
        
    </div>
  )
}

export default SubFooter
