import React from 'react'
import './SubHeader.css'

function SubHeader() {
  return (
    <div className='SubHeader' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#818cf8', padding: '10px', color: 'white'}}>
        <h2>Vi har brukt de siste 3 månedene på å teste de mest populære lysbehandlingsmaskene</h2>
    </div>
  )
}

export default SubHeader