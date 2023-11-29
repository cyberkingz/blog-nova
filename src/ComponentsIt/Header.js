import React from 'react';
import Logo from '../img/logo.png';

function Header() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '20px', color: 'white', alignItems: 'center', alignContent: 'center'}}>
        <img src={Logo} width="320px" alt="" />

    </div>
  )
}

export default Header