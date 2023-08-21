import React from 'react';
import './SubHeader.css';

function SubHeader() {
  return (
    <div className='SubHeader' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#818cf8', padding: '10px', color: 'white'}}>
        <h2>Wir haben die letzten 3 Monate damit verbracht, die meistverkauften Lichttherapiemasken zu testen</h2>
    </div>
  )
}

export default SubHeader;
