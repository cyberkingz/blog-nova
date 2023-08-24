import React from 'react';
import Img from '../img/writer.png';

function IntroWriter() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px', borderRadius: '10px'}}>
    <img src={Img} alt="" width="80px" style={{borderRadius: '100%', margin: 'auto auto'}}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
        <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Verfasst von Judy Phillips</p>

        <p style={{fontStyle: 'italic'}}>Fachexpertin für Falten & Leitende Redakteurin</p>
      </div>
    </div>

    <div>
          <p style={{fontSize: '12px', textAlign: 'center'}}>*Wir empfehlen ausschließlich Produkte, die wir persönlich getestet und für gut befunden haben.</p>

      <div style={{textAlign: 'left', width: '80%', margin: 'auto auto'}}>
    <p>Angesichts von Hautproblemen wie <strong>Schlaffheit, Falten, Hautunreinheiten und Entzündungen</strong> haben wir uns auf die Suche nach den <strong>Top 5 Lichttherapie-Masken</strong> gemacht, die für die <strong>Verbesserung und Verjüngung eines wunderbaren und jugendlichen Hautbildes</strong> stehen.</p>
    
    <p><strong>Lichttherapie oder LED-Masken</strong> sind in den letzten Jahren unglaublich beliebt geworden. Anfangs war diese Art der Behandlung nur über Dermatologen oder Kosmetiker erhältlich.</p>
    
    <p><strong>Jetzt können Sie dieselben Behandlungen auch zu Hause erhalten</strong>. Während das Alter deutliche Spuren auf Ihrem Gesicht hinterlassen hat, haben Sie bestimmt nach verschiedenen Möglichkeiten gesucht, die grausamen Auswirkungen der Zeit rückgängig zu machen.</p>
    
    <p>Allerdings könnten Kosten für einen Besuch in der Praxis je nach Standort bis zu <strong>380€ pro Sitzung</strong> betragen. Da LED-Therapie nie eine einmalige Angelegenheit ist, liegt es nur nahe, <strong>eine Lichttherapie-Maske zu finden, mit der Sie zu Hause dieselben Ergebnisse erzielen können</strong>.</p>
    
    <p>Wir haben 25 LED-Masken getestet, darunter Modelle von Qure, Novalight und OmniLux. Anschließend haben wir die <strong>5 besten Optionen anhand folgender Kriterien bewertet</strong>:</p>
</div>

        </div>
    </>
  )
}

export default IntroWriter;
