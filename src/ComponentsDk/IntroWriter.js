import React from 'react';
import Img from '../img/writer.png';

function IntroWriter() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px', borderRadius: '10px'}}>
      <img src={Img} alt="" width="80px" style={{borderRadius: '100%', margin: 'auto auto'}}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
        <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Skrevet af Julie Petersen</p>
        <p style={{fontStyle: 'italic'}}>Specialist i rynker og chefredaktør</p>
      </div>
    </div>

    <div>
      <p style={{fontSize: '12px', textAlign: 'center'}}>*Vi anbefaler kun produkter som vi personligt har afprøvet og som vi elsker.</p>
      <div style={{textAlign: 'left', width: '80%', margin: 'auto auto'}}>
          <p>Med hudproblemer såsom slap hud, rynker, uren hud og betændelse, har vi besluttet at finde de 5 bedste lysterapimasker, der er kendt for at forbedre og forynge en smuk og ungdommelig hud.</p>
          <p>Lysterapi, eller LED masker som de også kaldes, er blevet utroligt populære de seneste år. Til at starte med, kunne man dog kun opnå denne behandling hos hudlægen eller skønhedsklinikken.</p>
          <p>Nu er det dog muligt at få samme behandler derhjemme. Og i takt med at alderen viser tegn i dit ansigt, har du måske ønsket et våben til at bekæmpe tidens tand.</p>
          <p>Dog vil et besøg på klinikken ofte koste op til 2000 DKK per behandling, alt afhængigt af hvor i landet du bor. Men siden lysterapi ikke kun skal udføres én enkelt gang, er det en god idé at vælge en lysterapimaske du selv kan bruge, og opnå samme resultater derhjemme.</p>
          <p>Vi har testet 25 LED masker, inklusive modeller fra Qure, Novalight og OmniLux. Derefter udvalgte vi de 5 bedste løsninger, baseret på de følgende kriterier:</p>
      </div>

    </div>
    </>
  )
}

export default IntroWriter;
