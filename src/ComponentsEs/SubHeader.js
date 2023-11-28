import React from 'react';
import './SubHeader.css';

function SubHeader() {
  return (
    <div className='SubHeader' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#818cf8', padding: '10px', color: 'white'}}>
        <h2>Hemos pasado los últimos 3 meses probando las mascarillas de fototerapia más vendidas</h2>
    </div>
  )
}

export default SubHeader;
