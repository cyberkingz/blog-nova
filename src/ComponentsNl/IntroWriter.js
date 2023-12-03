import React from 'react';
import Img from '../img/writer.png';

function IntroWriter() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px', borderRadius: '10px'}}>
      <img src={Img} alt="" width="80px" style={{borderRadius: '100%', margin: 'auto auto'}}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
        <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Geschreven door Judy Phillips</p>
        <p style={{fontStyle: 'italic'}}>Rimpelspecialist & Senior Editor</p>
      </div>
    </div>

    <div>
      <p style={{fontSize: '12px', textAlign: 'center'}}>*We raden u alleen producten aan die we persoonlijk hebben getest en zelf ook echt geweldig vinden.</p>
      <div style={{textAlign: 'left', width: '80%', margin: 'auto auto'}}>
    <p>Voor huidproblemen zoals acne, rimpels, puistjes en ontstekingen zijn we op zoek gegaan naar de top 5 lichttherapie maskers die bekend staan om het verbeteren en verjongen van een prachtige en jeugdige teint.</p>
    <p>Lichttherapie of ook wel LED-maskers genoemd zijn de afgelopen jaren ongelooflijk populair geworden. In het begin was dit type behandeling alleen verkrijgbaar via uw dermatoloog of estheticus.</p>
    <p>Nu kunt u diezelfde behandelingen ook thuis uitvoeren. Naarmate u ouder wordt, heeft u misschien wel al verschillende manieren gezocht om sporen van ouderdom tegen te gaan.</p>
    <p>Een bezoek aan de praktijk kan u echter wel €300 per sessie kosten, afhankelijk van uw locatie. Omdat LED-therapie altijd meerdere sessies nodig heeft, is het alleen maar logisch om een lichttherapie-masker te vinden waarmee u thuis dezelfde resultaten kunt bereiken.</p>
    <p>We hebben 25 verschillende LED-maskers getest, waaronder modellen van Qure, Novalight en OmniLux. Vervolgens hebben we de 5 beste opties beoordeeld op basis van de volgende criteria:</p>
</div>

    </div>
    </>
  )
}

export default IntroWriter;
