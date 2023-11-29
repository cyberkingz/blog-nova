import React from 'react';
import Img from '../img/writer.png';

function IntroWriter() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px', borderRadius: '10px'}}>
      <img src={Img} alt="" width="80px" style={{borderRadius: '100%', margin: 'auto auto'}}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
        <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Scritto da Judy Phillips</p>
        <p style={{fontStyle: 'italic'}}>Specialista delle rughe e redattrice senior</p>
      </div>
    </div>

    <div>
      <p style={{fontSize: '12px', textAlign: 'center'}}>*Raccomandiamo solo prodotti che abbiamo testato e amato personalmente.</p>
      <div style={{textAlign: 'left', width: '80%', margin: 'auto auto'}}>
    <p>Con problemi di pelle come cedimenti, rughe, eruzioni cutanee e infiammazioni, abbiamo cercato le 5 migliori maschere per la fototerapia note per migliorare e ringiovanire una carnagione splendida e giovane.</p>
    <p>Le maschere per la fototerapia o LED sono diventate incredibilmente popolari negli ultimi anni. All'inizio, questo tipo di trattamento era disponibile solo presso il dermatologo o l'estetista.</p>
    <p>Ora è possibile effettuare gli stessi trattamenti anche a casa. Con l'avanzare dell'età sul vostro viso, potreste aver cercato diversi modi per riportare indietro le crudeli lancette del tempo.</p>
    <p>Tuttavia, una visita in studio può costare fino a 300 dollari a seduta, a seconda del luogo in cui ci si trova. Dato che la terapia LED non è mai un'operazione unica, ha senso trovare una maschera per la fototerapia da utilizzare per ottenere gli stessi risultati a casa.</p>
    <p>Abbiamo testato 25 maschere LED, tra cui i modelli di Qure, Novalight e OmniLux. Poi abbiamo valutato le 5 migliori opzioni in base ai seguenti criteri:</p>
</div>

    </div>
    </>
  )
}

export default IntroWriter;
