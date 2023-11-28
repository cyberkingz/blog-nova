import React from 'react';
import Img from '../img/writer.png';

function IntroWriter() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px', borderRadius: '10px'}}>
      <img src={Img} alt="" width="80px" style={{borderRadius: '100%', margin: 'auto auto'}}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
        <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Escrito por Judy Phillips</p>
        <p style={{fontStyle: 'italic'}}>Especialista en Arrugas y Editora Senior</p>
      </div>
    </div>

    <div>
      <p style={{fontSize: '12px', textAlign: 'center'}}>*Sólo recomendamos productos que hemos probado personalmente y que nos han encantado.</p>
      <div style={{textAlign: 'left', width: '80%', margin: 'auto auto'}}>
          <p>Ante problemas de la piel como la <strong>flacidez, las arrugas, los granos y la inflamación</strong>, nos propusimos encontrar las <strong>5 mejores mascarillas de fototerapia</strong> conocidas por <strong>mejorar y rejuvenecer un cutis espléndido y joven</strong>.</p>
          <p>Las mascarillas de fototerapia o LED se han hecho increíblemente populares en los últimos años. <strong>Al principio, este tipo de tratamiento sólo estaba disponible a través de su dermatólogo o de un esteticista</strong>.</p>
          <p><strong>Ahora, puede recibir esos mismos tratamientos en casa</strong>. A medida que la edad avanza por su rostro, es posible que haya buscado diferentes formas de hacer retroceder las crueles manos del tiempo.</p>
          <p>Sin embargo, una visita al consultorio podría costarle hasta 350 euros por sesión, dependiendo de su ubicación. Dado que la terapia LED nunca es una cosa de una sola vez, <strong>sólo tiene sentido encontrar una mascarilla de fototerapia que pueda utilizar para conseguir esos mismos resultados en casa</strong>.</p>
          <p>Nosotros hemos probado 25 mascarillas LED, incluyendo modelos de Qure, Novalight y OmniLux. <strong>Hemos clasificado las 5 mejores opciones según los siguientes criterios:</strong></p>
      </div>
    </div>
    </>
  )
}


export default IntroWriter;
