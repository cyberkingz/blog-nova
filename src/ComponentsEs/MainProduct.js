import React from 'react';
import IMG from '../img/Nova.jpg';
import { Check } from '@mui/icons-material';
import './MainProduct.css';
import { Box, Button, Divider, Typography } from '@mui/material';

function MainProduct() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>

      <div style={{ textAlign: 'left', width: '80%', margin: 'auto auto' }}>
        <div style={{ marginTop: '80px' }}>
          <p style={{ fontWeight: 'bold' }}>Coste</p>
          <p>Encontramos grandes resultados con máscaras LED que cuestan menos de <strong>200 euros</strong>. De hecho, ¡Nuestra mejor elección fue la opción de precio más bajo!</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Resultados</p>
          <p>Utilizamos estas mascarillas LED con regularidad para determinar cuánto tiempo tardarían en presentar resultados notables para reducir las arrugas y la flacidez.</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Seguras para uso doméstico</p>
          <p>Todas y cada una de estas mascarillas de fototerapia están aprobadas por dermatólogos y son seguras para su uso en casa.</p>
          <Divider />
        </div>
      </div>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px', width: '100%', margin: 'auto auto' }}>
        <div className='img-container'>
          <img src={IMG} alt="" width={'50%'} className='productIMG' style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
          <h2 style={{ background: '#818cf8', color: 'white', width: '120px', margin: '15px auto', borderRadius: '25px' }}>179€</h2>
        </div>

        <div style={{ textAlign: 'left', padding: '20px', paddingBottom: '0px' }}>
          <div className='TextSection'>
            <h3>¿Por qué los dermatólogos eligieron Regenmask de Novalight como la mejor opción de mascarilla LED para uso doméstico?</h3>
            <p>Nos encanta Regenmask, un producto que ha ganado muchos seguidores. Ahora mismo, además, tiene un 50% de descuento, lo que la convierte en la más asequible de las mascarillas LED que puede utilizar en casa. Esta mascarilla es capaz de desobstruir los poros y aclarar la piel a la vez que evita que los signos del envejecimiento prematuro se apoderen de ella. Además, tiene una parte que cubre el cuello, una de las zonas más olvidadas por el envejecimiento de la piel.</p>
            <p>Lo utilizamos todos los días durante 20 minutos diarios, ya que Novalight sugiere utilizarlo entre 15 y 30 minutos al día. Nos resultó cómodo y sin esfuerzo, al tiempo que trabajaba para librarnos de los signos de la exposición al sol a lo largo de los años. Y no es de extrañar que funcione tan bien... Cuenta con la misma y exclusiva tecnología LED empleada por la NASA para ayudarle a tratar la pigmentación, el enrojecimiento, la resequedad de la piel y las arrugas. Al final, ¡No podíamos creer lo radiante, impecable y bonita que nos dejó la piel! Los resultados son realmente de calidad profesional. Y con un 50% de descuento, significa que sólo cuesta 179€. Pero dese prisa, tendrá que pedirlo hoy para conseguirlo a este precio asombrosamente bajo.</p>
          </div>

          <div className="ListSection" style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Dermatológicamente aprobado como seguro para la piel.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Utiliza la tecnología LED de la NASA para el tratamiento de la piel.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> También cubre el cuello, centrándose en una zona que suele pasarse por alto. Apto para uso diario, con sesiones de 15-30 minutos.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Actualmente disponible a un precio rebajado de 179,00€.
              </Box>
            </Typography>
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="contained" href="https://novalight-uk.com/es-es/products/masque-facial-avec-led-novalight" sx={{ fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', borderRadius: '10px' }}>👉 LA MEJOR OPCIÓN</Button>
        <p>*Las existencias se están agotando</p>
      </div>

      <Divider />
    </div>
  )

}

export default MainProduct;
