import React from 'react'
import './SubHeader.css'

function SubHeader() {
  return (
    <div className='SubHeader' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#818cf8', padding: '10px', color: 'white'}}>
        <h2>Vi har tillbringat de senaste 3 månaderna med att testa de mest sålda ljusbehandlingsmaskerna</h2>
    </div>
  )
}

export default SubHeader