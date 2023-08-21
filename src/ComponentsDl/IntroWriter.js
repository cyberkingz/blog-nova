import React from 'react';
import Img from '../img/writer.png';

function IntroWriter() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px', borderRadius: '10px'}}>
    <img src={Img} alt="" width="80px" style={{borderRadius: '100%', margin: 'auto auto'}}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
        <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Geschrieben von Judy Phillips</p>
        <p style={{fontStyle: 'italic'}}>Spezialistin für Hautalterung & Chefredakteurin</p>
      </div>
    </div>

    <div>
          <p style={{fontSize: '12px', textAlign: 'center'}}>*Wir empfehlen nur Produkte, die wir persönlich getestet und gemocht haben.</p>
      <div style={{textAlign: 'left', width: '80%', margin: 'auto auto'}}>
          <p>Bei Hautproblemen wie <strong>Durchhängen, Falten, Ausbrüchen und Entzündungen</strong> haben wir nach den <strong>5 besten Lichttherapiemasken</strong> gesucht, die bekannt dafür sind, <strong>den Teint zu verbessern und zu verjüngen</strong>.</p>
          <p></p>
          <p>Lichttherapie oder LED-Masken sind in den letzten Jahren unglaublich populär geworden. <strong>Zu Beginn war diese Art von Behandlung nur beim Dermatologen oder Kosmetiker verfügbar</strong>.</p>
          <p></p>
          <p><strong>Jetzt können Sie diese gleichen Behandlungen zu Hause durchführen</strong>. Wenn Sie bemerken, dass Ihr Gesicht älter wird, haben Sie vielleicht nach verschiedenen Möglichkeiten gesucht, die grausamen Hände der Zeit zurückzudrängen.</p>
          <p></p>
          <p>Jedoch könnte <strong>ein Besuch in einer Praxis bis zu 450€ pro Sitzung kosten, je nach Ihrem Standort</strong>. Da die LED-Therapie nie eine einmalige Behandlung ist, <strong>macht es Sinn, eine Lichttherapiemaske zu finden, die Sie zu Hause verwenden können, um dieselben Ergebnisse zu erzielen</strong>.</p>
          <p></p>
          <p>Wir haben 25 LED-Masken getestet, einschließlich Modelle von Qure, Novalight und OmniLux. <strong>Dann haben wir die 5 besten Optionen nach den folgenden Kriterien bewertet</strong>:</p>
          <p></p> 
     </div>
        </div>
    </>
  )
}

export default IntroWriter;
