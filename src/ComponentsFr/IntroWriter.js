import React from 'react';
import Img from '../img/writer.png';

function IntroWriter() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px', borderRadius: '10px'}}>
    <img src={Img} alt="" width="80px" style={{borderRadius: '100%', margin: 'auto auto'}}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
        <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Écrit par Judy Phillips</p>
        <p style={{fontStyle: 'italic'}}>Spécialiste du vieillissement de la peau & Éditeur en chef</p>
      </div>
    </div>

    <div>
          <p style={{fontSize: '12px', textAlign: 'center'}}>*Nous recommandons uniquement des produits que nous avons personnellement testés et aimés.</p>
      <div style={{textAlign: 'left', width: '80%', margin: 'auto auto'}}>
          <p>Pour des problèmes de peau tels que le <strong>relâchement, les rides, les éruptions et les inflammations</strong>, nous avons cherché les <strong>5 meilleurs masques de photothérapie</strong> reconnus pour <strong>améliorer et rajeunir un teint magnifique et jeune</strong>.</p>
          <p></p>
          <p>La photothérapie ou les masques LED sont devenus incroyablement populaires ces dernières années. <strong>Au début, ce type de traitement n'était disponible que chez un dermatologue ou un esthéticien</strong>.</p>
          <p></p>
          <p><strong>Maintenant, vous pouvez obtenir ces mêmes traitements à la maison</strong>. Avec l'âge qui avance sur votre visage, vous avez peut-être cherché différentes façons de repousser les mains cruelles du temps.</p>
          <p></p>
          <p>Cependant, <strong>une visite en cabinet pourrait coûter jusqu'à 450€ par séance, selon votre emplacement</strong>. Comme la thérapie LED n'est jamais un traitement unique, <strong>il est logique de trouver un masque de photothérapie que vous pouvez utiliser pour obtenir ces mêmes résultats à la maison</strong>.</p>
          <p></p>
          <p>Nous avons testé 25 masques LED, y compris des modèles de Qure, Novalight et OmniLux. <strong>Ensuite, nous avons évalué les 5 meilleures options selon les critères suivants</strong>:</p>
          <p></p> 
     </div>
        </div>
    </>
  )
}

export default IntroWriter;
