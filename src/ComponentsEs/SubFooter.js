import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/logo.png'

function SubFooter() {
  return (
    <div style={{padding: '10px', marginTop: '50px', background: 'white', paddingBottom: '20px', paddingTop: '20px'}}>

        <div>
            <img src={IMG} alt="" style={{filter: 'invert(1)', width: '300px'}}/>
            <p style={{marginTop: '0px', fontSize: '12px'}}><strong>*Sólo recomendamos productos que hemos probado personalmente y que nos han encantado.</strong><br/>
            Ganamos con los clics de los enlaces a 4 de los productos mencionados.</p>
            <Divider sx={{mt: 5}}/>
        </div>
        
    </div>
  )
}

export default SubFooter
