import React from 'react';
import './SubHeader.css';

function SubHeader() {
  return (
    <div className='SubHeader' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#818cf8', padding: '10px', color: 'white'}}>
        <h2>Vi har brugt de sidste 3 måneder på at teste de bedst sælgende lysterapimasker</h2>
    </div>
  )
}

export default SubHeader;
