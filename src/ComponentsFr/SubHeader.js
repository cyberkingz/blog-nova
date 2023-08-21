import React from 'react';
import './SubHeader.css';

function SubHeader() {
  return (
    <div className='SubHeader' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#818cf8', padding: '10px', color: 'white'}}>
        <h2>Nous avons passé les 3 derniers mois à tester les masques de luminothérapie les plus vendus</h2>
    </div>
  )
}

export default SubHeader;
