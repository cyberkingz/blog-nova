import React from 'react';
import Img from '../img/writer.png';

function IntroWriter() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px', borderRadius: '10px'}}>
      <img src={Img} alt="" width="80px" style={{borderRadius: '100%', margin: 'auto auto'}}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
        <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Écrit par Judy Phillips</p>
        <p style={{fontStyle: 'italic'}}>Spécialiste des rides et rédactrice en chef</p>
      </div>
    </div>

    <div>
      <p style={{fontSize: '12px', textAlign: 'center'}}>*Nous recommandons exclusivement des produits que nous avons personnellement testés et aimés.</p>
      <div style={{textAlign: 'left', width: '80%', margin: 'auto auto'}}>
          <p>Face aux problèmes de peau tels que le <strong>relâchement, les rides, les éruptions cutanées et l'inflammation</strong>, nous avons cherché les <strong>5 meilleurs masques de luminothérapie</strong> connus pour <strong>améliorer et raviver un teint magnifique et éclatant</strong>.</p>
          <p>Les masques de luminothérapie ou LED ont connu une popularité incroyable ces dernières années. <strong>À ses débuts, ce type de traitement n'était disponible que chez le dermatologue ou l’esthéticienne</strong>.</p>
          <p><strong>Aujourd'hui, vous pouvez bénéficier de ces mêmes traitements à domicile</strong>. Au fur et à mesure que le temps défile sur votre visage, vous avez peut-être cherché différents moyens de faire reculer les cruelles aiguilles de la montre.</p>
          <p>Cependant, <strong>une visite en cabinet peut coûter jusqu'à 300 euros par séance, selon l'endroit où vous vous trouvez.</strong> La thérapie par LED n'étant jamais une solution unique, <strong>il est naturel de trouver un masque de luminothérapie que vous pouvez utiliser pour obtenir les mêmes résultats chez vous</strong>.</p>
          <p>Nous avons testé 25 masques LED, dont des modèles de Qure, Novalight et OmniLux. <strong>Nous avons ensuite classé les 5 meilleures options en fonction des critères suivants</strong> :</p>
      </div>
    </div>
    </>
  )
}

export default IntroWriter;
