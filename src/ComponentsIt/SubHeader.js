import React from 'react';
import './SubHeader.css';

function SubHeader() {
  return (
    <div className='SubHeader' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#818cf8', padding: '10px', color: 'white'}}>
        <h2>Abbiamo trascorso gli ultimi 3 mesi a testare le maschere per la fototerapia più vendute</h2>
    </div>
  )
}

export default SubHeader;
